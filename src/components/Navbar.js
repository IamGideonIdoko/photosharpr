import {Dropdown} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeAllSidebars, openAllSidebars, openOnlyLeftSidebar, openOnlyRightSidebar} from './../reduxstore/actions/sidebarActions';
import '../styles/Navbar.css';

const Navbar = (props) => {

    /* document
        .addEventListener('keydown', function (event) {
            // CTRL + S combo
            if (event.ctrlKey && event.key === 'd') {
                console.log("ctrl + s combo");
            }
            // CTRL + L combo
            if (event.ctrlKey && event.key === 'l') {
                console.log("ctrl + l combo");
            }
        }); */

    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1>Photosharpr</h1>
            </div>
            <div className="navbar-right">
                <Dropdown
                    icon="cog"
                    text='Settings&nbsp;'
                    pointing="top right"
                    className="fs-16">
                    <Dropdown.Menu className="fs-16">
                        <Dropdown.Item className="fs-16" text='Select Photo' description='ctrl + alt + o'/>
                        <Dropdown.Item className="fs-16" text='Download' disabled description='ctrl + alt + s' />
                        <Dropdown.Item className="fs-16" text='Presets' disabled />
                        <Dropdown.Item className="fs-16" icon='trash' disabled text='Reset'/>
                        <Dropdown.Divider/>
                        <Dropdown text='Sidebars' pointing='right' className='link item fs-16'>
                            <Dropdown.Menu className="fs-16">
                                <Dropdown.Item className="fs-16" onClick={() => props.openOnlyLeftSidebar()}>Show only left</Dropdown.Item>
                                <Dropdown.Item className="fs-16" onClick={() => props.openOnlyRightSidebar()}>Show only right</Dropdown.Item>
                                <Dropdown.Item className="fs-16" onClick={() => props.openAllSidebars()}>Show both</Dropdown.Item>
                                <Dropdown.Item className="fs-16" onClick={() => props.closeAllSidebars()}>Show none</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown text='Preview' pointing='right' className='link item fs-16'>
                            <Dropdown.Menu className="fs-16">
                                <Dropdown.Item className="fs-16">Show only original</Dropdown.Item>
                                <Dropdown.Item className="fs-16">Show only output</Dropdown.Item>
                                <Dropdown.Item className="fs-16">Show both</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Divider/>
                        <Dropdown.Item className="fs-16" text='Help' description='ctrl + alt + h' />
                        <Dropdown.Item className="fs-16" text='About v0.1' />
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({sidebar: state.sidebar})

export default connect(mapStateToProps, {closeAllSidebars, openAllSidebars, openOnlyLeftSidebar, openOnlyRightSidebar})(Navbar);
