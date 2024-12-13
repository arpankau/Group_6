import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.outbox}>
        <Text style={styles.name} >Gourab Podder</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outbox: {
    backgroundColor: '#333',
    padding: 30,
    borderRadius: 6
  },
  name: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 26
  }

});
