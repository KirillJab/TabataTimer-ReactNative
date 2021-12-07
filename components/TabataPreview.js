import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Tooltip } from "react-native-elements";

const TabataPreview = (props) => {
  const dropDownMenu = (
    <View style={styles.dropDownContainer}>
      <View style={styles.dropDownItemContainer}>
        <View style={styles.dropDownIconContainer}>
          <Icon type="material-community" name="pencil" size={30} />
        </View>
        <View style={styles.dropDownTextContainer}>
          <Text style={styles.dropDownText}>Edit</Text>
        </View>
      </View>
      <View style={styles.dropDownItemContainer}>
        <View style={styles.dropDownIconContainer}>
          <Icon type="fontisto" name="eye" />
        </View>
        <View style={styles.dropDownTextContainer}>
          <Text style={styles.dropDownText}>View</Text>
        </View>
      </View>
      <View style={styles.dropDownItemContainer}>
        <View style={styles.dropDownIconContainer}>
          <Icon type="entypo" name="trash" size={30} />
        </View>
        <View style={styles.dropDownTextContainer}>
          <Text style={styles.dropDownText}>Delete</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container} onPress={props.navigation}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{props.title || "Title"}</Text>
        <View style={styles.headerIconsContainer}>
          <Icon type="entypo" name="controller-play" size={32} color="white" />
          <Tooltip
            withOverlay={false}
            withPointer={false}
            containerStyle={{
              height: 150,
              width: 150,
              backgroundColor: "white",
            }}
            popover={dropDownMenu}
          >
            <Icon
              type="entypo"
              name="dots-three-vertical"
              size={25}
              color="white"
            />
          </Tooltip>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Warm Up: {props.warmUpTime || "Title"}
        </Text>
        <Text style={styles.contentText}>
          Work Out: {props.workOutTime || "Title"}
        </Text>
        <Text style={styles.contentText}>
          Rest Time: {props.restTime || "Title"}
        </Text>
        <Text style={styles.contentText}>
          Cycles: {props.cyclesCount || "Title"}
        </Text>
        <Text style={styles.contentText}>
          Total: {props.totalTime || "Title"}
        </Text>
      </View>
    </View>
  );
};

export default TabataPreview;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "red",
    borderRadius: 10,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIconsContainer: {
    width: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    paddingTop: 5,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  contentText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  dropDownContainer: {
    width: 150,
    height: 150,
    backgroundColor: "white",
  },
  dropDownItemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  dropDownIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  dropDownTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 5,
  },
  dropDownText: {
    fontSize: 18,
  },
});
