import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import CalmDown from "../components/CalmDown";
import Cycles from "../components/Cycles";
import Rest from "../components/Rest";
import RestBetween from "../components/RestBetween";
import Sets from "../components/Sets";
import WarmUp from "../components/WarmUp";
import WorkOut from "../components/WorkOut";
import validateTimeInput from "../utils/ValidateTimeInput";

const Tabata = () => {
  const [warmUpTime, setWarmUpTime] = useState("10");
  const [workOutTime, setWorkOutTime] = useState("20");
  const [restTime, setRestTime] = useState("10");
  const [cyclesCount, setCyclesCount] = useState("8");
  const [setsCount, setSetsCount] = useState("1");
  const [restBetweenTime, setRestBetweenTime] = useState("0");
  const [calmDownTime, setCalmDownTime] = useState("0");

  const handleWarmUpTimeChange = (value) => {
    setWarmUpTime(validateTimeInput(value, 120));
  };
  const handleWorkOutTimeChange = (value) => {
    setWorkOutTime(validateTimeInput(value, 35999));
  };
  const handleRestTimeChange = (value) => {
    setRestTime(validateTimeInput(value, 35999));
  };
  const handleCyclesCountChange = (value) => {
    setCyclesCount(validateTimeInput(value, 100));
  };
  const handleSetsCountChange = (value) => {
    setSetsCount(validateTimeInput(value, 100));
  };
  const handleRestBetweenTimeChange = (value) => {
    setRestBetweenTime(validateTimeInput(value, 300));
  };
  const handleCalmDownTimeChange = (value) => {
    setCalmDownTime(validateTimeInput(value, 3600));
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <WarmUp time={warmUpTime} onChangeText={handleWarmUpTimeChange} />
          <WorkOut time={workOutTime} onChangeText={handleWorkOutTimeChange} />
          <Rest time={restTime} onChangeText={handleRestTimeChange} />
          <Cycles time={cyclesCount} onChangeText={handleCyclesCountChange} />
          <Sets time={setsCount} onChangeText={handleSetsCountChange} />
          <RestBetween
            time={restBetweenTime}
            onChangeText={handleRestBetweenTimeChange}
          />
          <CalmDown
            time={calmDownTime}
            onChangeText={handleCalmDownTimeChange}
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="height">
        <View style={styles.footer}>
          <Button
            type="solid"
            containerStyle={{ flex: 2, paddingRight: 15 }}
            buttonStyle={styles.footerButton}
            icon={{
              type: "fontisto",
              name: "nav-icon-list-a",
              size: 28,
              color: "white",
            }}
          />
          <Button
            type="solid"
            containerStyle={{ flex: 6, paddingRight: 15 }}
            buttonStyle={styles.footerButton}
            title="START"
            titleStyle={{ fontSize: 24, letterSpacing: 4 }}
            icon={{
              type: "entypo",
              name: "controller-play",
              size: 45,
              color: "white",
            }}
          />
          <Button
            type="solid"
            containerStyle={{ flex: 2, paddingRight: 15 }}
            buttonStyle={styles.footerButton}
            icon={{ type: "entypo", name: "plus", size: 45, color: "white" }}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Tabata;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 80,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerButton: {
    height: 60,
  },
});
