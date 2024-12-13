import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.aname}>Arpanpreet kaur</Text>
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
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aname:{
    color:'#fff',
    fontSize:39,
  },
  outbox: {
    backgroundColor: '#333',
    padding: 30,
    marginTop:20
  },
  name: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 26
  }
});
