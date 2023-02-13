import React, { useRef } from 'react';
import { View, Video } from 'react-native';

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
      <Video
        ref={videoRef}
        source={{ uri: 'https://www.youtube.com/watch?v=1cUWX5pS_7I&ab_channel=ONEMedia' }}
        repeat
        resizeMode="cover"
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
      />
    </View>
  );
};

export default BackgroundVideo;