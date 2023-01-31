import * as React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'

import videos from '../data/videos.json'

type VideoProps = {
  isPlaying: boolean
  play()
  requestFullscreen()
}

const Video = styled.video`
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
`

const IndexPage = () => {
  const videoRef = useRef(null)
  const video = videoRef.current as unknown as VideoProps

  if (video) {
    if (video.isPlaying) {
      video.play()
    }

    // if (video.requestFullscreen) {
    //   video.requestFullscreen()
    // }
  }

  return (
    <Layout>
      <Seo title='Home' />
      <Video controls autoPlay loop ref={videoRef}
        muted={false}
        width={'100%'}
        height={'100%'}>
        {videos.map(({ src, type }, index) => <source src={src} key={index} type={type} />)}
      </Video>
    </Layout>
  )
}

export default IndexPage
