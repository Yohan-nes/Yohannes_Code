import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, SafeAreaView, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={ [styles.container, containerStyle]}>
      
      <Button
      
      title = "Press me"
      
      
        ></Button>
      
    </SafeAreaView>
  );
}
 const containerStyle = { backgroundColor: "red"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
