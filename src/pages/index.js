import * as React from "react"
import { useRef } from 'react'
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"




const Video = styled.video`
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  const videoRef = useRef(null)
  const video = videoRef.current

  if (video) {
    video.addEventListener('canplay', () => {
      console.log('canplay')
    })

    if (!video.isPlaying) {
      video.play()
    }

    if (video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Video controls autoPlay loop ref={videoRef}>
        <source
          src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          type="video/mp4"
        />
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
      </Video>
    </Layout>
  )
}

export default IndexPage
