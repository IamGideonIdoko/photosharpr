
import {Icon, Menu, Popup} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import RightSidebar from '@components/RightSidebar';
import '@styles/WithSidebars.css';

const WithSidebars = ({ children }) => {


    const isLeftSidebarOpen = useSelector(state => state.sidebar.isLeftSidebarOpen);
    const isRightSidebarOpen = useSelector(state => state.sidebar.isRightSidebarOpen);
    const file = useSelector(state => state.file);

    const handleFileSelect = () => {
        // triger file input
        file.fileUploadInputElementLoaded && window.fileUploadInputElement.click();
    }


    return (
        <div className="withsidebars-wrapper">

            <div className="withsidebars">
                <div className={`left-sidebar ${ !isLeftSidebarOpen && "closed" }`}>
                    <Menu
                        as={Menu}
                        animation='push'
                        icon='labeled'
                        vertical>
                        <Popup
                            className="fs-14"
                            content='Upload the photo you want to manipulate.'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14" onClick={handleFileSelect}>
                                <Icon name='plus'/>
                                <small>Select Photo</small>
                            </Menu.Item>
                            }
                        />
                    </Menu>

                    <Menu
                        as={Menu}
                        animation='push'
                        icon='labeled'
                        vertical>
                        <Popup
                            className="fs-14"
                            content='Enhance resolution of photo.'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14">
                                <Icon name='camera retro'/>
                                <small>Enhance</small>
                            </Menu.Item>
                            }
                        />
                        <Popup
                            className="fs-14"
                            content='Create cartoon out of photo.'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14">
                                <Icon name='smile'/>
                                <small>Toonize</small>
                            </Menu.Item>
                            }
                        />
                        <Popup
                            className="fs-14"
                            content='Add color (if photo is black and white).'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14">
                                <Icon name='adjust'/>
                                <small>Colorize</small>
                            </Menu.Item>
                            }
                        />
                        <Popup
                            className="fs-14"
                            content='Gravely increase the texture of photo.'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14">
                                <Icon name='bolt'/>
                                <small>Texturize</small>
                            </Menu.Item>
                            }
                        />
                        <Popup
                            className="fs-14"
                            content='Detect and locate faces in photo.'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14" >
                                <Icon  name='camera'/>
                                <small>Detect Face</small>
                            </Menu.Item>
                            }
                        />
                        <Popup
                            className="fs-14"
                            content='Predict and label the age, gender...'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14">
                                <Icon name='lightbulb'/>
                                <small>Predict & Label</small>
                            </Menu.Item>
                            }
                        />
                        <Popup
                            className="fs-14"
                            content='Detect emotion of faces in photo.'
                            position='right center'
                            trigger={
                            <Menu.Item as='a' className="fs-14">
                                <Icon name='meh'/>
                                <small>Detect Emotion</small>
                            </Menu.Item>
                            }
                        />
                    </Menu>
                </div>

                <div className={`right-sidebar ${ !isRightSidebarOpen && "closed" }`}>
                    <RightSidebar />
                </div>

                <div className={`middle-content ${ (!isLeftSidebarOpen && isRightSidebarOpen) ? "no-left-sidebar" : (isLeftSidebarOpen && !isRightSidebarOpen) ? "no-right-sidebar" : (isLeftSidebarOpen && isRightSidebarOpen) ? "" : "no-sidebars" }`}>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default WithSidebars;
