import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input, Icon } from "react-native-elements";

import theme from "../theme";
import styles from "./styles/Styles";
import TimeInput from "./TimeInput";

const Sets = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name="restore"
          size={60}
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Sets</Text>
        <TimeInput onChangeText={props.onChangeText} time={props.time} />
      </View>
    </View>
  );
};

export default Sets;
