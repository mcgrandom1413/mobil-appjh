import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function WalletScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.walletSelector}>
            <Text style={styles.walletText}>Wallet 01</Text>
            <Ionicons name="chevron-down" size={16} color="white" />
          </View>
          <Ionicons name="search" size={24} color="white" />
        </View>

        {/* Saldo Principal */}
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceTitle}>$1,120.22</Text>
          </View>
          <TouchableOpacity style={styles.receiveBtn}>
            <Text style={styles.receiveText}>Receive</Text>
          </TouchableOpacity>
        </View>

        {/* Botones de Acción */}
        <View style={styles.actionRow}>
          <ActionIcon icon="scan-outline" label="Scan" />
          <ActionIcon icon="gift-outline" label="Rewards" />
          <ActionIcon icon="history" label="History" isMCI />
          <ActionIcon icon="dots-horizontal" label="More" isMCI />
        </View>

        {/* Sección de Tokens (Ejemplo) */}
        <View style={styles.tokenSection}>
          <Text style={styles.sectionTitle}>Tokens</Text>
          <TokenItem name="CAT" price="$3,006.12" change="-2.38%" isUp={false} />
          <TokenItem name="COOKIE" price="$0.12231" change="+6.19%" isUp={true} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// Componentes pequeños para organizar mejor el código
const ActionIcon = ({ icon, label, isMCI = false }: any) => (
  <View style={styles.actionItem}>
    <View style={styles.iconCircle}>
      {isMCI ? 
        <MaterialCommunityIcons name={icon} size={24} color="white" /> : 
        <Ionicons name={icon} size={24} color="white" />
      }
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </View>
);

const TokenItem = ({ name, price, change, isUp }: any) => (
  <View style={styles.tokenItem}>
    <View style={styles.tokenIcon} />
    <View style={{ flex: 1 }}>
      <Text style={styles.tokenName}>{name}</Text>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.tokenPrice}>{price}</Text>
      <Text style={{ color: isUp ? '#02c076' : '#cf304a', fontSize: 12 }}>{change}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
  walletSelector: { flexDirection: 'row', alignItems: 'center' },
  walletText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 5 },
  balanceContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  balanceLabel: { color: '#848e9c', fontSize: 14 },
  balanceTitle: { color: '#fff', fontSize: 36, fontWeight: 'bold' },
  receiveBtn: { backgroundColor: '#fcd535', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 },
  receiveText: { fontWeight: 'bold', fontSize: 16 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  actionItem: { alignItems: 'center' },
  iconCircle: { width: 50, height: 50, borderRadius: 15, backgroundColor: '#1e2329', justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  actionLabel: { color: '#848e9c', fontSize: 12 },
  tokenSection: { paddingHorizontal: 20, marginTop: 10 },
  sectionTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  tokenItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  tokenIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#333', marginRight: 15 },
  tokenName: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  tokenPrice: { color: '#fff', fontSize: 16, fontWeight: '600' },
});