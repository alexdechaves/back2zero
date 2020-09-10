import React, {useEffect, useState, useCallback} from "react"
import Gallery from 'react-photo-gallery';
import { makeStyles } from '@material-ui/core/styles';
import Carousel, { Modal, ModalGateway } from "react-images";
import LinearProgress from '@material-ui/core/LinearProgress'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
            height: 450,
        },
    progress: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        }
}}));

export default function Photos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    
    const [instaImages, setInstaImages] = useState()

    function processInsta(arr) {
        const imagesArr = arr.map(content => {
            console.log(content)
                return {
                    src: content.node.display_url,
                    title: content.node.edge_media_to_caption.edges[0].node.text,
                    width: Number(content.node.dimensions.width),
                    height: Number(content.node.dimensions.height)
                }
        })

        setInstaImages(imagesArr)
    }

    useEffect(() => {
        fetch('https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=1421339286&first=50')
            .then(response => response.json())
            .then(data => processInsta(data.data.user.edge_owner_to_timeline_media.edges))
      }, []);
    
    const classes = useStyles();


    return (
        <div className={classes.root}>
            {instaImages ?
                <div>
                    <Gallery photos={instaImages} onClick={openLightbox}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={instaImages.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                                }))}
                            />
                            </Modal>
                        ) : null}
                        </ModalGateway>
                </div>
        : <LinearProgress className={classes.progress} color="secondary" />}
                
        </div>
    );
}

