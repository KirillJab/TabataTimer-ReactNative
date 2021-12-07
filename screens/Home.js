import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import TabataPreview from "../components/TabataPreview";

const Home = (props) => {
  const [tabatas, setTabatas] = useState([]);

  const DATA = [
    {
      title: "Title tile",
      warmup: "10",
      cycles: "10",
    },
    {
      title: "title",
      warmup: "10",
      cycles: "10",
    },
    {
      title: "title",
      warmup: "10",
      cycles: "10",
    },
    {
      title: "title",
      warmup: "10",
      cycles: "10",
    },
    {
      title: "title",
      warmup: "10",
      cycles: "10",
    },
    {
      title: "title",
      warmup: "10",
      cycles: "10",
    },
    {
      title: "title",
      warmup: "10",
      cycles: "10",
    },
  ];

  const renderItem = (tabata) => (
    <TabataPreview style={styles.flatListItem} title={tabata.item.title} />
  );

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
  },
  flatListItem: {
    margin: 100,
  },
});
