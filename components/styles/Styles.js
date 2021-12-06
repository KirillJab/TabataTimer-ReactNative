import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    height: 55,
  },
  inputContainer: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "center",
  },
  labelStyle: {
    fontSize: 24,
    color: theme.colors.primary,
  },
});

export default styles;
