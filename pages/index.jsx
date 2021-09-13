import { useEffect, useRef } from "react"
import Hls from "hls.js"
import Header from "../components/Header";
import Index from "../components/Index";
import Footer from "../components/Footer";

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
      <Header />
      <Index videoRef={videoRef}/>
      <Footer />
      <style jsx global>{`
        body {
          margin: 0px;
        }
    `}</style>
    </div>
  )
};

export default IndexPage;