import {Dropdown} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import {closeAllSidebars, openAllSidebars, openOnlyLeftSidebar, openOnlyRightSidebar} from '@store/slice/sidebar.slice';
import '@styles/Navbar.css';

const Navbar = (props) => {
    const dispatch = useDispatch();

    // const sidebar = useSelector(state => state.sidebar);

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
                        <Dropdown text='Sidebars' pointing="right" className='link item fs-16'>
                            <Dropdown.Menu className="fs-16">
                                <Dropdown.Item className="fs-16" onClick={() => dispatch(openOnlyLeftSidebar())}>Show only left</Dropdown.Item>
                                <Dropdown.Item className="fs-16" onClick={() => dispatch(openOnlyRightSidebar())}>Show only right</Dropdown.Item>
                                <Dropdown.Item className="fs-16" onClick={() => dispatch(openAllSidebars())}>Show both</Dropdown.Item>
                                <Dropdown.Item className="fs-16" onClick={() => dispatch(closeAllSidebars())}>Show none</Dropdown.Item>
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

export default Navbar;
