import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView, Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput, TouchableOpacity,
  View
} from 'react-native';

// Exportación limpia para que el Login lo reconozca
export const mockDatabase = {
  registeredEmail: '',
  registeredPassword: ''
};

export default function RegisterScreen() {
  const router = useRouter();
  const [country, setCountry] = useState('Colombia');
  const [errors, setErrors] = useState<any>({});
  
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', address: '', email: '', password: ''
  });

  const handleSignUp = () => {
    let currentErrors: any = {};

    // Validación de todos los campos
    if (!form.firstName) currentErrors.firstName = true;
    if (!form.lastName) currentErrors.lastName = true;
    if (!form.phone) currentErrors.phone = true;
    if (!form.address) currentErrors.address = true;
    if (!form.email.includes('@')) currentErrors.email = true;
    if (form.password.length < 4) currentErrors.password = true;

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      Alert.alert("Atención", "Por favor completa los campos resaltados en rojo.");
      return;
    }

    // Guardar datos correctamente
    mockDatabase.registeredEmail = form.email.toLowerCase().trim();
    mockDatabase.registeredPassword = form.password;

    Alert.alert("¡Éxito!", "Cuenta creada correctamente.", [
      { text: "Ir al Login", onPress: () => router.replace('/') }
    ]);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.mainContainer}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Create Account</Text>

        <View style={styles.row}>
          <View style={styles.flex1}>
            <Text style={styles.label}>First Name</Text>
            <TextInput 
              style={[styles.input, errors.firstName && styles.inputError]} 
              placeholder="Jhon" 
              onChangeText={(v) => {
                setForm({...form, firstName: v});
                if(v) setErrors({...errors, firstName: false});
              }} 
            />
          </View>
          <View style={[styles.flex1, { marginLeft: 15 }]}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput 
              style={[styles.input, errors.lastName && styles.inputError]} 
              placeholder="Bastidas" 
              onChangeText={(v) => {
                setForm({...form, lastName: v});
                if(v) setErrors({...errors, lastName: false});
              }} 
            />
          </View>
        </View>

        <Text style={styles.label}>Mobile Phone</Text>
        <TextInput 
          style={[styles.input, errors.phone && styles.inputError]} 
          placeholder="3243723993" 
          keyboardType="phone-pad"
          onChangeText={(v) => {
            setForm({...form, phone: v});
            if(v) setErrors({...errors, phone: false});
          }} 
        />

        <Text style={styles.label}>Address</Text>
        <TextInput 
          style={[styles.input, errors.address && styles.inputError]} 
          placeholder="Santa Fe" 
          onChangeText={(v) => {
            setForm({...form, address: v});
            if(v) setErrors({...errors, address: false});
          }} 
        />

        <Text style={styles.label}>Select Country</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={country}
            onValueChange={(itemValue) => setCountry(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Colombia" value="Colombia" />
            <Picker.Item label="USA" value="USA" />
            <Picker.Item label="México" value="México" />
          </Picker>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={[styles.input, errors.email && styles.inputError]} 
          placeholder="jhon@example.com" 
          autoCapitalize="none"
          onChangeText={(v) => {
            setForm({...form, email: v});
            if(v.includes('@')) setErrors({...errors, email: false});
          }} 
        />

        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={[styles.input, errors.password && styles.inputError]} 
          placeholder="........" 
          secureTextEntry 
          onChangeText={(v) => {
            setForm({...form, password: v});
            if(v.length >= 4) setErrors({...errors, password: false});
          }} 
        />

        <TouchableOpacity style={styles.boton} onPress={handleSignUp}>
          <Text style={styles.textoBoton}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')} style={styles.link}>
          <Text style={styles.linkText}>I already have an account</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: { paddingHorizontal: 25, paddingTop: 50, paddingBottom: 40 },
  titulo: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#333' },
  row: { flexDirection: 'row' },
  flex1: { flex: 1 },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', // Color corregido
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 18, 
    backgroundColor: '#f9f9f9' 
  },
  inputError: {
    borderColor: '#FF0000',
    borderWidth: 1.5,
    backgroundColor: '#FFF5F5'
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 18,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden'
  },
  picker: { height: 50, width: '100%' },
  boton: { 
    backgroundColor: '#FFCC33', // Color amarillo
    padding: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginTop: 15 
  },
  textoBoton: { fontWeight: 'bold', fontSize: 16 },
  link: { marginTop: 25, alignItems: 'center' },
  linkText: { color: '#007AFF', fontSize: 14 }
});