import { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl, Platform, StatusBar, FlatList } from 'react-native';


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

  const DATA = [
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
  ]

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items, { item: 'Item 69' }])
    setRefreshing(false)
  }


  return (
    <SafeAreaView style={styles.safeArea} >
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <View style={styles.item} key={index.toString()}>
            <Text style={styles.text}>{item.item}</Text>
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

      {/* <ScrollView
        style={styles.body}

      >
        {
          items.map((i) => {
            return (
              <View style={styles.item} key={i.key}>
                <Text style={styles.text}>{i.item}</Text>
              </View>
            )
          })
        }
        </ScrollView> */}
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
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: '#000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});
