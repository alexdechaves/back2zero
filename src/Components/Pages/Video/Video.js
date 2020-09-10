import React from "react"
import VideoItem from "./VideoItem"

const videoPlaylist = [
    'https://www.youtube.com/watch?v=V0qEO9pdDGU',
    'https://www.youtube.com/watch?v=EVV6PjgcHuk'
]


export default function Video() {
    const playlist = videoPlaylist.map(content => {
        console.log(content)
        return <VideoItem url={content}/>
    })

    return playlist
}