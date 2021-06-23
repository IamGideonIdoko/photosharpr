import {Label} from 'semantic-ui-react';
import '../styles/MainEnvironment.css';

const MainEnvironment = () => {
    return (
        <div className="main-environment">
            <div className="preview-container">
                <span className="preview-label">Preview</span>
                <div className="original-preview preview">
                    <Label as='a' color='black' className="fs-12 original-label" id="original-label" ribbon>
                        Original
                    </Label>

                </div>
                <div className="output-preview preview">
                    <Label as='a' color='black' className="fs-12 output-label" id="output-label" ribbon>
                        Output
                    </Label>
                </div>
            </div>
        </div>
    )
}

export default MainEnvironment
