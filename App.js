import { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl, Platform, StatusBar, FlatList, SectionList, TextInput, Alert, Modal, Pressable, ImageBackground } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.1 }; //used to disappears when clicked

export default function App() {

  const [name, setName] = useState('')
  const [visible, setVisible] = useState(true)
  const [showWarning, setShowWarning] = useState(false)
  const onPressHandler = () => {
    if (name.length > 3) {
      setVisible(!visible)
    } else {
      // Alert.alert('Warning', 'The name must be longer than 3 characters', [
      //   { text: 'Don\'t show again', onPress: () => console.warn('Don\'t show again Pressed!') },
      //   { text: 'Cancel', onPress: ()=> console.warn('Cancel Pressed!')},
      //   { text: 'Ok', onPress: () => console.warn('OK Pressed!') },
      // ], { cancelable: true, onDismiss: ()=>{console.warn('Alert Dismissed!')}})

    }
  }

  const onPressShowModal = () => {
    setShowWarning(!showWarning)
  }

  return (
    <SafeAreaView style={styles.safeArea} >
      <StatusBar
        backgroundColor='#fff'
        barStyle='dark-content'
      />
      <ImageBackground
        style={styles.body}
        resizeMode='stretch'
        source={{
          uri: 'https://www.adobe.com/express/create/media_1f567ece896acb3fa96b8f7d730a9a236727c1c88.jpeg?width=400&format=jpeg&optimize=medium'
        }}
      >
        <Modal
          visible={showWarning}
          onRequestClose={() => { setShowWarning(false) }}
          transparent
        >
          <View style={styles.centeredView}>
            <View style={styles.warningModal}>
              <View style={styles.warningTitle}>
                <Text style={styles.text}>WARNING!</Text>
              </View>
              <View style={styles.warningBody}>
                <Text style={styles.text} >The name must be longer than 3 characters</Text>
              </View>
              <Pressable
                onPress={onPressShowModal}
                style={styles.warningButton}
              >
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <ScrollView style={styles.scroll}>
          <View style={styles.body}>
          <Text style={styles.text} > Please write your name:</Text>
          <TextInput
            style={styles.input}
            placeholder='e.g. John'
            value={name}
            onChangeText={value => setName(value)}
            secureTextEntry={visible} da
          />
            <Pressable
              onPress={onPressHandler}
              style={styles.button}
            >
              <Text style={styles.text}>{visible ? 'Show' : 'Hide'}</Text>
          </Pressable>

          <Pressable
            onPress={onPressShowModal}
            style={styles.button}
          >
            <Text style={styles.text}>Show Warning</Text>
          </Pressable>

            <Text style={styles.text} > Your name is {name}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === "android" ? 0 : 0
  },
  scroll: {
    width: '100%'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    margin: 10,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    width: '80%',
    borderColor: '#555',
    borderRadius: 5,
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#fff'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  button: {
    backgroundColor: '#29ffc9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    margin: 10
  },
  warningModal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,

  },
  warningTitle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  warningBody: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warningButton: {
    backgroundColor: '#0ff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});
