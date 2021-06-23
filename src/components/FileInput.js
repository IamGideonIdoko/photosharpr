import {useEffect, useRef, Fragment} from 'react';
import {connect} from 'react-redux';
import {populateFileInfo, loadCurrentFilelist} from './../reduxstore/actions/currentFileActions';
import {loadFileInput} from './../reduxstore/actions/fileActions';
import {createOutputCanvas} from './../helper';

const FileInput = ({loadFileInput, file, populateFileInfo, loadCurrentFilelist, currentFile}) => {
    const fileUploadInputElement = useRef(null);

    useEffect(() => {
        // load the upload input into the redux store when the component loads
        loadFileInput(fileUploadInputElement.current);
    }, [loadFileInput]);

    // useEffect to house change events
    useEffect(() => {
        if (file.fileUploadInputElement) {
            file
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
                                loadCurrentFilelist(thisFile.files);
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
    }, [file.fileUploadInputElement, populateFileInfo, loadCurrentFilelist, currentFile])

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
}

const mapStateToProps = (state, ownProps) => ({file: state.file, currentFile: state.currentFile})

export default connect(mapStateToProps, {loadFileInput, populateFileInfo, loadCurrentFilelist})(FileInput);
