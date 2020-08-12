import React from "react"
import "./Home.css"

export default function Home(props) {
    return(
        <div className="background-video">
            <iframe
                className="vimeo-iframe"
                title="Back 2 Zero - People Like Us (Official Music Video)"
                src="https://player.vimeo.com/video/353289171?background=1"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowfullscreen>
            </iframe>
        </div>
    )
}