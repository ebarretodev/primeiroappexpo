import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, Platform, StatusBar, TextInput, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.1 }; //used to disappears when clicked

export default function App() {

  const [name, setName] = useState('teste')
  const [visible, setVisible] = useState(true)

  const onPressHandler = () => {
    setVisible(!visible)
  }

  return (
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.body}>
        <Text style={styles.text} > Please write your name:</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. John'
          value={name}
          onChangeText={value => setName(value)}
          secureTextEntry={visible}da
        />

        <Button
          title={visible ? 'Show' : 'Hide' }
          onPress={onPressHandler}

        />

        <TouchableOpacity
          style={styles.button}
          onPress={onPressHandler}
        >
          <Text style={styles.textButton}  >{visible ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.button}
          onPress={onPressHandler}
          underlayColor="#ddd"
        >
          <Text style={styles.textButton}  >{visible ? 'Show' : 'Hide'}</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback
          onPress={onPressHandler}
        >
          <View style={styles.button}>
            <Text style={styles.textButton}  >{visible ? 'Show' : 'Hide'}</Text>
          </View>
        </TouchableWithoutFeedback>

        <Pressable
          style={({pressed}) => [
            styles.button,
            { backgroundColor: pressed ? '#ddd' : '#0f0' }
          ]}
          onPress={onPressHandler}
          //onLongPress={onPressHandler}
          delayLongPress={2000}
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          android_ripple= {{color: '#00f'}}

        >
          <Text style={styles.textButton}  >{visible ? 'Show' : 'Hide'}</Text>
        </Pressable>


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
    margin: 10

  },
  button: {
    backgroundColor: '#0f0',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
