import React from 'react';
import song from '../recordings/testrecording.mp3';

function Recording(props) {
  return <audio src={song} controls></audio>;
}

export default Recording;
