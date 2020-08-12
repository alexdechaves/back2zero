import StreamDownload from "./StreamDownload";
import Header from "./Header"
import React from "react"
 
export default function Music(props) {
    const AllMusic = props.musicArr.map((content, index) => {
        return <StreamDownload title={content.title} key={index} uri={content.uri}/>
    })

    
    return(
        <div>
            <Header />
            {AllMusic}
        </div>
        )
}