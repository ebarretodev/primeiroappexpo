import { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl, Platform, StatusBar, FlatList, SectionList, TextInput } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.1 }; //used to disappears when clicked

export default function App() {

  const [name, setName] = useState('')
  const [visible, setVisible] = useState(true)

  return (
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.body}>
        <Text style={styles.text} > Please write your name:</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. John'
          onChangeText={value => setName(value)}
          secureTextEntry={visible}da
        />
        <Button title='Visible' onPress={()=>{setVisible(!visible)}} />
        <Text style={styles.text} > Your name is {name}</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    borderColor: '#555',
    borderRadius: 5,
    fontSize: 25,
    padding: 10,
    textAlign: 'center',

  }
});
