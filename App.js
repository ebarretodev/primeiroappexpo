import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


TouchableOpacity.defaultProps = { activeOpacity: 0.1 }; //used to disappears when clicked

export default function App() {
  const [count, setCount] = useState(0)


  const onButtonPress = () => {
    setCount(count+1)
  }

  return (
    <View style={styles.body}>
      <Text style= {styles.text}>{count * 5}</Text>
      <AppButton title='ADD' size="sm" backgroundColor="#eee" onPress={onButtonPress} />
      <Text style={styles.text}>You clicked {count} times</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const AppButton = ({ onPress, title, size, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6
      },
      backgroundColor && { backgroundColor }
    ]}
  >
    <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
  },

  buttonSample: {
    backgroundColor: '#EEE',
    color: '#000',
    fontSize: 15,
  },
  appButtonContainer: {
    width: '90%',
    elevation: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
