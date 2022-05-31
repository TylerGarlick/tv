import * as React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

const Video = styled.video`
  width: 100%;
  height: 100%;
`

export default () => {

  const videoEl = useRef(null);

  const video = videoEl.current;
  if (video && !video.isPlaying) {
    video.play();
  }

  return
  <>
    <Video>
      <source
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        type="video/mp4"
      />
      <source
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        type="video/mp4"
      />
    </Video>
  </>
}
