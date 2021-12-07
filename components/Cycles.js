import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input, Icon } from "react-native-elements";

import styles from "./styles/TabataStyles";
import TimeInput from "./TimeInput";

const Cycles = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon type="material-community" name="repeat" size={60} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Cycles</Text>
        <TimeInput onChangeText={props.onChangeText} time={props.time} />
      </View>
    </View>
  );
};

export default Cycles;
