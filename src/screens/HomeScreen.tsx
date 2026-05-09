import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>🏠 ¡Estás en el Inicio!</Text>
      <Text style={styles.subtexto}>Aquí irá el contenido principal de tu app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24, fontWeight: 'bold' },
  subtexto: { fontSize: 16, color: 'gray', marginTop: 10 }
});