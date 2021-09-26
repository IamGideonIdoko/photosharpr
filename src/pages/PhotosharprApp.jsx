import Navbar from '@components/Navbar';
import WithSidebars from '@layouts/WithSidebars';
import MainEnvironment from '@components/MainEnironment';
import FileInput from '@components/FileInput';

const PhotosharprApp = () => {
    return (
        <div style={{position: 'relative'}}>
            <FileInput />
            <Navbar/>
            <WithSidebars>
                <MainEnvironment />
            </WithSidebars>

        </div>
    )
}

export default PhotosharprApp
