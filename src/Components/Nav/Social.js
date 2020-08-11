import React from "react"
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Icon} from '@iconify/react';
import spotifyIcon from '@iconify/icons-mdi/spotify';
import "./Social.css"


export default function Social() {
    return(
        <ButtonGroup color="secondary" aria-label="outlined primary button group">
            <IconButton href="https://www.instagram.com/_back2zero_/" target="_blank">
                <InstagramIcon />
            </IconButton>
            <IconButton href="">
                <FacebookIcon />
            </IconButton>
            <IconButton href="">
                <YouTubeIcon />
            </IconButton>
            <IconButton href="">
                <Icon icon={spotifyIcon} />
            </IconButton>
        </ButtonGroup>
    )
}