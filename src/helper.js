/** Function to convert file size from byte */
export const convertByteInString = (val) => {
    let convertedVal;
    if (val < 1048576) {
        convertedVal = Number.parseFloat(val / 1024).toFixed(2) + 'kb';
        return convertedVal;
    } else if (val >= 1048576) {
        convertedVal = Number.parseFloat(val / 1048576).toFixed(2) + 'mb';
        return convertedVal;
    }
}


/** Function to create output canvas with image drawn on it */
export const createOutputCanvas = (file, canvasParentId, option, populateFileInfo) => {
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



            // set the width and height of the canvas to default to that of the image to be drawn
            canvas.width = canvasImgWidth;
            canvas.height = canvasImgHeight;

            // populate file info in redux store
            populateFileInfo({
                    name: file.files[0].name,
                    type: file.files[0].type,
                    filesize: convertByteInString(file.files[0].size),
                    width: canvasImgWidth,
                    height: canvasImgHeight
                });

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
