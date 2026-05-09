import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#25292e' }]}>
      <Text style={styles.logo}>Mano App</Text>
      <ActivityIndicator size="large" color="#ffd33d" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 40, fontWeight: 'bold', color: '#fff', marginBottom: 20 }
});