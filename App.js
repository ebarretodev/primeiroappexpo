import { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl, Platform, StatusBar } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.1 }; //used to disappears when clicked

export default function App() {
  const [items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
    { key: 9, item: 'Item 9' },
    { key: 27, item: 'Item 27' },
    { key: 98, item: 'Item 98' },
  ])
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items, { key: 69, item: 'Item 69' }])
    setRefreshing(false)
  }


  return (
    <SafeAreaView style={styles.safeArea} >
      <ScrollView
        style={styles.body}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#FF00FF']}
          />
        }
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
        </ScrollView>
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
