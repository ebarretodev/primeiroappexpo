import { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl, Platform, StatusBar, FlatList, SectionList } from 'react-native';


TouchableOpacity.defaultProps = { activeOpacity: 0.1 }; //used to disappears when clicked

export default function App() {
  const [items, setItems] = useState([
    { item: 'Item 1' },
    { item: 'Item 2' },
    { item: 'Item 3' },
    { item: 'Item 4' },
    { item: 'Item 5' },
    { item: 'Item 6' },
    { item: 'Item 7' },
    { item: 'Item 8' },
    { item: 'Item 9' },
    { item: 'Item 27' },
    { item: 'Item 98' },
  ])

  const [data, setData] = useState([
    {
      title: 'Title 1',
      data: [ 'Item 1-1', 'Item 1-2', 'Item 1-3']
    },
    {
      title: 'Title 2',
      data: [ 'Item 2-1', 'Item 2-2', 'Item 2-3']
    },
    {
      title: 'Title 3',
      data: [ 'Item 3-1', 'Item 3-2', 'Item 3-3']
    },
    {
      title: 'Title 4',
      data: [ 'Item 4-1', 'Item 4-2', 'Item 4-3']
    },
  ])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    let nextValue = data.length + 1
    setData([...data, {
      title: `Title ${nextValue}`,
      data: [`Item ${nextValue}-1`, `Item ${nextValue}-2`, `Item ${nextValue}-3`]
    },])
    setRefreshing(false)
  }


  return (
    <SafeAreaView style={styles.safeArea} >
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <View style={styles.item} >
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#FF00FF']}
          />
        }
      />
        </SafeAreaView>
        );
}


const styles = StyleSheet.create({
  safeArea: {

    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A6A6A6'
  },
  header: {
    fontSize: 32,
    backgroundColor: '#4BE2FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000'
  },
  text: {
    color: '#000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});
