import React, { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';


export default function VideoItem(props) {
    const [toggler, setToggler] = useState(false);
    const [asset, setAsset] = useState()

    useEffect(() => {
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          mode: 'no-cors'
        };
        
        fetch("https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=V0qEO9pdDGU", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
    }, [])

    return (
        <div>
            <button onClick={() => setToggler(!toggler)}>
                {/* <img alt={asset.title} src={asset.thumbnail_url}></img> */}
            </button>
            <FsLightbox
                toggler={toggler}
                sources={[
                    props.url
                ]}
            />
        </div>
        );
}