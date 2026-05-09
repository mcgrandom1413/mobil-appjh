import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

export default function RegisterScreen() {
  const [country, setCountry] = useState('Colombia'); 

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Create Account</Text>
        
        {/* Nombres y Apellidos */}
        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1, marginRight: 10 }]} placeholder="First Name" />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Last Name" />
        </View>

        {/* Datos de contacto */}
        <TextInput style={styles.input} placeholder="Mobile Phone" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Address" multiline />

        {/* Selección de País */}
        <Text style={styles.label}>Select Country:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={country}
            onValueChange={(itemValue) => setCountry(itemValue)}
          >
            <Picker.Item label="Argentina" value="Argentina" />
            <Picker.Item label="Chile" value="Chile" />
            <Picker.Item label="Colombia" value="Colombia" />
            <Picker.Item label="España" value="España" />
            <Picker.Item label="México" value="México" />
            <Picker.Item label="Perú" value="Perú" />
            <Picker.Item label="USA" value="USA" />
          </Picker>
        </View>

        {/* Credenciales */}
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        {/* Botón de Registro */}
        <TouchableOpacity style={styles.botonSignUp}>
          <Text style={styles.textoBoton}>SIGN UP</Text>
        </TouchableOpacity>

        {/* Enlace al Login centrado y con estilo */}
        <TouchableOpacity style={styles.loginLinkContainer}>
          <Text style={styles.loginLinkText}>I already have an account</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  scrollContainer: { 
    padding: 25, 
    paddingTop: 40 
  },
  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  label: { 
    fontSize: 16, 
    marginBottom: 5, 
    color: '#666' 
  },
  row: { 
    flexDirection: 'row', 
    marginBottom: 15 
  },
  input: { 
    backgroundColor: '#f9f9f9', 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 15 
  },
  pickerContainer: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
  },
  botonSignUp: { 
    backgroundColor: '#ffd33d', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 10 
  },
  textoBoton: { 
    fontWeight: 'bold', 
    fontSize: 16,
    color: '#25292e'
  },
  loginLinkContainer: {
    marginTop: 20,
    alignItems: 'center', // Centra el link horizontalmente
    width: '100%',
  },
  loginLinkText: {
    color: '#007AFF', // Color azul de link
    fontSize: 15,
    textDecorationLine: 'underline', // Subrayado
    textAlign: 'center',
  },
});