//layout would be on every page (ex. a navbar)

import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
      {/* <View style={styles.container}>
        <Text>RootLayout</Text>
      </View> */}
    </>
  );
};

export default RootLayout;

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
// });
