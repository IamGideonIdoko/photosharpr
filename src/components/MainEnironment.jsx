import {Label} from 'semantic-ui-react';
import '@styles/MainEnvironment.css';
import { useSelector } from 'react-redux';

const MainEnvironment = () => {
    const isOutputOpen = useSelector(state => state.environment.isOutputOpen);
    const isOriginalOpen = useSelector(state => state.environment.isOriginalOpen);

    return (
        <div className="main-environment">
            <div className="preview-container">
                <span className="preview-label">Preview</span>
                <div id="originalPreview" className={`original-preview preview ${!isOriginalOpen ? 'd-none' : ''}`}>
                    <Label as='span' color='black' className="fs-12 original-label" id="original-label" ribbon>
                        Original
                    </Label>
                    <div id="originalLastChild">

                    </div>

                </div>
                <div id="outputPreview" className={`output-preview preview ${!isOutputOpen ? 'd-none' : ''}`}>
                    <Label as='span' color='black' className="fs-12 output-label" id="output-label" ribbon>
                        Output
                    </Label>
                    <div id="outputLastChild">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainEnvironment
