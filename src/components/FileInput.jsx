import {useEffect, useRef, Fragment} from 'react';
import {populateFileInfo, loadCurrentFilelist} from '@store/slice/currentFile.slice';
import {loadFileInput} from '@store/slice/file.slice';
import {convertByteInString} from '@utils/helper';
import {useSelector, useDispatch} from 'react-redux';

const FileInput = () => {
    const dispatch = useDispatch();
    const fileUploadInputElement = useRef(null);
    const currentFile = useSelector(state => state.currentFile);

    useEffect(() => {
        // load the upload input into the redux store when the component loads
        dispatch(loadFileInput(document.querySelector('#fileUploadInputElement')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /** Function to create output canvas with image drawn on it */
    const createOutputCanvas = (file, canvasParentId, option, populateFileInfo) => {
        /* option.type include: "selected-image" & "external-image" */
        /* for "external-image", file is the link to the external image */

        // fetch the parent container where the canvas will be
        const canvasParent = window
            .document
            .getElementById(canvasParentId);

        // create an new image object
        const canvasImg = new Image();
        // set the origin of the image resource to unkown
        canvasImg.crossOrigin = "anonymous";

        // check option type
        if (option.type === "selected-image") {
            // set the source of the image to the selected image blob
            canvasImg.src = URL.createObjectURL(file.files[0]);
        } else {
            // file is a url, set directly
            canvasImg.src = file;
        }

        // listen for image load change
        canvasImg
            .addEventListener('load', function () {
                // revoke object url
                URL.revokeObjectURL(file.src);

                const canvasImgWidth = this.naturalWidth;
                const canvasImgHeight = this.naturalHeight;

                // create a new canvas element
                const canvas = window
                    .document
                    .createElement('canvas');

                // set the width and height of the canvas to default to that of the image to be
                // drawn
                canvas.width = canvasImgWidth;
                canvas.height = canvasImgHeight;

                // populate file info in redux store
                dispatch(populateFileInfo({
                    name: file.files[0].name,
                    type: file.files[0].type,
                    filesize: convertByteInString(file.files[0].size),
                    width: canvasImgWidth,
                    height: canvasImgHeight
                }));

                canvas.style.maxWidth = "100%";
                canvas.style.maxHeight = "100%";

                // draw the selected image to the canvas
                canvas
                    .getContext("2d")
                    .drawImage(this, 0, 0);

                // to store canvas blob
                let blob;

                if (option.type === "selected-image") {} else {
                    // get as data URI
                    if (canvasImg.src.indexOf(".jpg") > -1) {
                        blob = canvas.toDataURL("image/jpeg");
                    } else if (canvasImg.src.indexOf(".png") > -1) {
                        blob = canvas.toDataURL("image/png");
                    } else if (canvasImg.src.indexOf(".gif") > -1) {
                        blob = canvas.toDataURL("image/gif");
                    } else {
                        // eslint-disable-next-line no-unused-vars
                        blob = canvas.toDataURL("image/png");
                    }
                }

                // create the existing canvas
                canvasParent.lastChild.innerHTML = "";
                // add new canvas to parent
                canvasParent
                    .lastChild
                    .appendChild(canvas);

            });

    }

    // useEffect to house change events
    useEffect(() => {
        if (window.fileUploadInputElement) {
            window
                .fileUploadInputElement
                .addEventListener('change', function () {

                    // store the element on which the event is called upon
                    const thisFile = this;
                    // validate length
                    if (!this.files.length) {
                        // no file is selected set file prop of input file to current Filelist
                        this.files = currentFile.currentFilelist;
                    } else {
                        // file is selected validate image type (jpg, png, gif)
                        if (this.files[0].type !== "image/jpeg" && this.files[0].type !== "image/png" && this.files[0].type !== "image/gif") {
                            // file is neither a png or jpg or gif

                            console.log("Selected file in neither a gif nor png nor jpg");

                        } else {
                            // file is either a png or jpg or gif create and image element create an image
                            // element
                            console.log(this.files[0]);
                            const imgElement = window
                                .document
                                .createElement("img");

                            // set src of image element to object url (blob)
                            imgElement.src = URL.createObjectURL(this.files[0]);

                            // set the id of image element
                            imgElement.id = "orginalImage";

                            // add a onload listener to the image
                            imgElement.addEventListener('load', () => {
                                // revoke object url
                                URL.revokeObjectURL(thisFile.src);
                            });

                            // set image max width and height t0 be 100%
                            imgElement.style.maxWidth = "100%";
                            imgElement.style.maxHeight = "100%";

                            // get the original preview
                            const originalPreview = window
                                .document
                                .querySelector("#originalPreview");

                            // get the output preview
                            const outputPreview = window
                                .document
                                .querySelector("#outputPreview");

                            // validate if the original preview element is in the dom
                            if (originalPreview) {
                                // element exists in the dom insert image into preview area.
                                originalPreview.lastChild.innerHTML = "";
                                originalPreview
                                    .lastChild
                                    .appendChild(imgElement);

                            } else {
                                // element does not exist in the dom
                                console.error("No original preview element found");
                            }

                            // validate if the output preview element is in the dom
                            if (outputPreview) {
                                dispatch(loadCurrentFilelist(thisFile.files));
                                // element exists in the dom
                                createOutputCanvas(thisFile, "outputPreview", {
                                    type: "selected-image"
                                }, populateFileInfo);
                            } else {
                                // element does not exist in the dom
                                console.error("No original preview element found");
                            }

                        }
                    }
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.fileUploadInputElement, dispatch, currentFile])

    return (
        <Fragment>
            <input
                ref={fileUploadInputElement}
                type="file"
                id="fileUploadInputElement"
                name="fileUploadInputElement"
                className="fileUploadInputElement"
                accept={"image/png,.jpg,image/jpeg,image/gif"}
                style={{
                display: "none"
            }}/>
        </Fragment>
    )
};

export default FileInput;