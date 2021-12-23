import { useEffect, useRef } from "react"
import Hls from "hls.js"
import Header from "../components/Header";
import Index from "../components/Index";
import Footer from "../components/Footer";
import VideoPage from "../components/Video";
import Music from "../components/Music";
import Photos from "../components/Photos";
import Contact from "../components/Contact";
import Tour from "../components/Tour";

const IndexPage = () => {
  const videoRef = useRef()

  useEffect(() => {
    const hls = new Hls()
    hls.loadSource("https://stream.mux.com/KlohsKWiLbd75MWfiV7NeUzVD2N5YkD2Pkg2N4K1thk.m3u8")
    hls.attachMedia(videoRef.current)
    videoRef.current.play()
  }, [])
  
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <section>
        <Index videoRef={videoRef}/>
        <Music />
        <VideoPage />
        <Photos />
        <Tour />
        <Contact />
        <Footer />
      </section>
    </div>
  )
};

export default IndexPage;