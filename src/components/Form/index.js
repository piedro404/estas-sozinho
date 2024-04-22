import React, { useState } from "react";
import { View, Text, TouchableOpacity, Vibration } from "react-native";
import { Video } from "expo-av";

import styles from "./styles";

export default function Form() {
  const video = React.useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  function yes() {
    Vibration.vibrate(1000, true);
    if(video.current) {
      setShowVideo(false);
    }
  }

  function no() {
    setShowVideo(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity
          style={styles.btn}
          onPress={yes}
        >
          <Text style={styles.text}>SIM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={no}
        >
          <Text style={styles.text}>NÃO</Text>
        </TouchableOpacity>
      </View>
      {showVideo && (
        <Video
          ref={video}
          style={styles.video}
          source={require("./pedro.mp4")}
          resizeMode="contain"
          shouldPlay
        />
      )}
    </View>
  );
}
