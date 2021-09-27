import {useState} from 'react';
import {Accordion, Icon} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import '@styles/RightSidebar.css'

const RightSidebar = () => {
    const [activeIndex,
        setActiveIndex] = useState([0]);


    const currentImageInfo = useSelector(state => state.currentFile.currentImageInfo);
    const isImageLoaded = useSelector(state => state.currentFile.isImageLoaded);

    const handleAccordionTitleClick = (e, titleProps) => {
        const {index} = titleProps;
        setActiveIndex((prevState) => {
            if (prevState.includes(index)) {
                return prevState.filter(x => x !== index);
            } else {
                return [
                    ...prevState,
                    index
                ];
            }
        });
    }

    return (
        <div>
            <Accordion fluid>
                <Accordion.Title
                    active={activeIndex.includes(0)}
                    index={0}
                    onClick={handleAccordionTitleClick}
                    className="rs-accordion-title">
                    <Icon name="info circle"/>
                    Image Details 
                </Accordion.Title>
                <Accordion.Content
                    className="rs-accordion-content"
                    active={activeIndex.includes(0)}>
                    <div>
                        {isImageLoaded ? <ul className="img-info-list">
                            <li>
                                <span>Name:&nbsp;</span>
                                <span>{currentImageInfo.name}</span>
                            </li>
                            <li>
                                <span>Type:&nbsp;</span>
                                <span>{currentImageInfo.type.substring(6).toUpperCase()}</span>
                            </li>
                            <li>
                                <span>Size:&nbsp;</span>
                                <span>{currentImageInfo.filesize}</span>
                            </li>
                            <li>
                                <span>Dimensions:&nbsp;</span>
                                <span>{`${currentImageInfo.width}px × ${currentImageInfo.height}px`}</span>
                            </li>
                        </ul> : <div>
                            No image is selected yet.
                        </div>}
                    </div>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex.includes(1)}
                    index={1}
                    onClick={handleAccordionTitleClick}
                    className="rs-accordion-title mt-1">
                    <Icon name="sliders"/>
                    Additional Config
                </Accordion.Title>
                <Accordion.Content
                    className="rs-accordion-content"
                    active={activeIndex.includes(1)}>
                    <p>
                        There are many breeds of dogs. Each breed varies in size and temperament. Owners
                        often select a breed of dog that they find to be compatible with their own
                        lifestyle and desires from a companion.
                    </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex.includes(2)}
                    index={2}
                    onClick={handleAccordionTitleClick}
                    className="rs-accordion-title mt-1">
                    <Icon name="tint"/>
                    Presets
                </Accordion.Title>
                <Accordion.Content
                    className="rs-accordion-content"
                    active={activeIndex.includes(2)}>
                    <p>
                        Three common ways for a prospective owner to acquire a dog is from pet shops,
                        private owners, or shelters.
                    </p>
                    <p>
                        A pet shop may be the most convenient way to buy a dog. Buying a dog from a
                        private owner allows you to assess the pedigree and upbringing of your dog
                        before choosing to take it home. Lastly, finding your dog from a shelter, helps
                        give a good home to a dog who may not find one so readily.
                    </p>
                </Accordion.Content>
            </Accordion>

        </div>
    )
}


export default RightSidebar;
