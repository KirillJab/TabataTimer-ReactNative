import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input, Icon } from "react-native-elements";

import theme from "../theme";
import styles from "./styles/Styles";
import TimeInput from "./TimeInput";

const CalmDown = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          type="font-awesome-5"
          name="couch"
          size={60}
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Calm Down</Text>
        <TimeInput onChangeText={props.onChangeText} time={props.time} />
      </View>
    </View>
  );
};

export default CalmDown;
