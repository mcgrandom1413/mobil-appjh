import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.saludo}>¡Hola!</Text>
        <Text style={styles.subtitulo}>Bienvenido a tu Wallet</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Saldo disponible</Text>
          <Text style={styles.saldo}>$ 25,680.50</Text>
        </View>
        
        <Text style={styles.section}>Movimientos recientes</Text>
        <View style={styles.movimiento}>
          <Text>Supermercado La 14</Text>
          <Text style={{fontWeight: 'bold'}}>- $ 125.80</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', paddingTop: 60 },
  header: { padding: 25 },
  saludo: { fontSize: 24, fontWeight: 'bold' },
  subtitulo: { color: '#888' },
  content: { padding: 25 },
  card: { backgroundColor: '#fff', padding: 25, borderRadius: 20, elevation: 4 },
  cardLabel: { color: '#888', marginBottom: 5 },
  saldo: { fontSize: 32, fontWeight: 'bold' },
  section: { fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 15 },
  movimiento: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15, borderRadius: 12 }
});