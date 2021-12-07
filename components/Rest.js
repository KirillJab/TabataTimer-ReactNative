import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input, Icon } from "react-native-elements";

import styles from "./styles/TabataStyles";
import TimeInput from "./TimeInput";

const Rest = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          type="material-community"
          name="human-handsdown"
          size={55}
          style={styles.icon}
        />
        <Icon type="MaterialIcons" name="timer" size={40} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>Rest</Text>
        <Input
          placeholder="Add description"
          inputStyle={{ textAlign: "center" }}
          inputContainerStyle={{ borderBottomWidth: 0, paddingVertical: 0 }}
          errorStyle={{ height: 0 }}
          value={props.description}
          onChangeText={props.onDescriptionChange}
        />
        <TimeInput onChangeText={props.onChangeText} time={props.time} />
      </View>
    </View>
  );
};

export default Rest;
