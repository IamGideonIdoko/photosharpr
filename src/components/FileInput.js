import {useEffect, useRef, Fragment} from 'react';
import {connect} from 'react-redux';
import {loadFileInput} from './../reduxstore/actions/fileActions';

const FileInput = ({loadFileInput, file}) => {
    const fileUploadInputElement = useRef(null);

    useEffect(() => {
        // load the upload input into the redux store when the component loads
        loadFileInput(fileUploadInputElement.current);
    }, [loadFileInput]);

    // fresh useEffect
    useEffect(() => {
        if (file.fileUploadInputElement) {
            file
                .fileUploadInputElement
                .addEventListener('change', function() {
                    console.log("file input was changed");
                    console.log(this.files);
                    if(!this.files.length) {

                        // no file is selected
                        console.log("No file is selected");
                    } else {
                        // a file  is selected

                        // check if the selected file is an image (jpg, png, gif)
                        if(this.files[0].type !== "image/jpeg" || this.files[0].type !== "image/png" || this.files[0].type !== "image/png") {
                            // file is neither a png or jpg or gif
                            console.log("Selected file in neither a gif nor png nor jpg");

                        }
                    }
                })
        }
    }, [file.fileUploadInputElement])

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

const mapStateToProps = (state, ownProps) => ({file: state.file})

export default connect(mapStateToProps, {loadFileInput})(FileInput);
