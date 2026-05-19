import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter, Link } from 'expo-router';

// Importamos la simulación desde el archivo de registro
import { mockDatabase } from './register'; 

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const cleanEmail = email.toLowerCase().trim();
    
    if (cleanEmail === mockDatabase.registeredEmail && password === mockDatabase.registeredPassword && cleanEmail !== '') {
      router.replace('/wallet'); 
    } else {
      Alert.alert("Acceso Denegado", "Correo o contraseña incorrectos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Welcome Back 👋</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        onChangeText={setEmail} 
        autoCapitalize="none" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={setPassword} 
      />

      <TouchableOpacity style={styles.boton} onPress={handleLogin}>
        <Text style={styles.textoBoton}>LOG IN</Text>
      </TouchableOpacity>

      <Link href="/register" asChild>
        <TouchableOpacity style={{marginTop: 20}}>
          <Text style={{color: '#007AFF', textAlign: 'center'}}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#fff' },
  titulo: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9' },
  boton: { backgroundColor: '#a37d2e', padding: 18, borderRadius: 10, alignItems: 'center' },
  textoBoton: { color: '#fff', fontWeight: 'bold' }
});