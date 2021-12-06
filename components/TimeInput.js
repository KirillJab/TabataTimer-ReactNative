import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

const TimeInput = (props) => {
  const interval = useRef(null);
  const decreaseAmount = useRef(null);
  const timeInterval = 70;
  return (
    <Input
      leftIcon={{
        type: "entypo",
        name: "circle-with-minus",
        onPress: () => {
          props.onChangeText(+props.time - decreaseAmount.current);
        },
        onLongPress: () => {
          interval.current = setInterval(() => {
            decreaseAmount.current++;
            props.onChangeText(+props.time - decreaseAmount.current);
          }, timeInterval);
        },
        onPressOut: () => {
          decreaseAmount.current = 1;
          clearInterval(interval.current);
        },
      }}
      rightIcon={{
        type: "entypo",
        name: "circle-with-plus",
        onPress: () => {
          props.onChangeText(+props.time + decreaseAmount.current);
        },
        onLongPress: () => {
          interval.current = setInterval(() => {
            decreaseAmount.current++;
            props.onChangeText(+props.time + decreaseAmount.current);
          }, timeInterval);
        },
        onPressOut: () => {
          decreaseAmount.current = 1;
          clearInterval(interval.current);
        },
      }}
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      onChangeText={props.onChangeText}
      value={props.time}
    />
  );
};

export default TimeInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    fontSize: 22,
    textAlign: "center",
  },
});
