import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Create Account</Text>
        
        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1, marginRight: 10 }]} placeholder="First Name" />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Last Name" />
        </View>

        <TextInput style={styles.input} placeholder="Mobile Phone" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Address" multiline />
        <TextInput style={styles.input} placeholder="Country" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <TouchableOpacity style={styles.botonSignUp}>
          <Text style={styles.textoBoton}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContenedor}>
          <Text style={styles.textoLink}>I already have an account</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { padding: 25, paddingTop: 40 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  row: { flexDirection: 'row', marginBottom: 15 },
  input: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 15 },
  botonSignUp: { backgroundColor: '#ffd33d', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBoton: { fontWeight: 'bold', fontSize: 16 },
  linkContenedor: { marginTop: 20, alignItems: 'center' },
  textoLink: { color: '#007AFF', textDecorationLine: 'underline' },
});