import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';


TouchableOpacity.defaultProps = { activeOpacity: 0.1 }; //used to disappears when clicked

export default function App() {
  const [count, setCount] = useState(0)



  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.viewLine1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>
      <View style={styles.viewLine2}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  viewLine1: {
    flexDirection: 'row',

  },
  viewLine2: {
    flexDirection: 'row',
    flex: 1,
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5FF'
  },
  view2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E401E4'
  },
  view3: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F303'
  },
  view4: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00'
  },
  view5: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0'
  },
  view6: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  view7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00f'
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
  },
});
