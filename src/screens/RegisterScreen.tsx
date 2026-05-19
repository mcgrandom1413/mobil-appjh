import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TextInput, TouchableOpacity, 
  ScrollView, KeyboardAvoidingView, Platform, Alert 
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', address: '', email: '', password: '',
  });
  const [country, setCountry] = useState('USA'); 
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSignUp = () => {
    let currentErrors: Record<string, boolean> = {};
    // Validación de campos obligatorios
    if (!form.firstName) currentErrors.firstName = true;
    if (!form.lastName) currentErrors.lastName = true;
    if (!form.phone) currentErrors.phone = true;
    if (!form.email.includes('@')) currentErrors.email = true;
    if (!form.password) currentErrors.password = true;

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      Alert.alert("Éxito", "Cuenta creada correctamente", [
        { text: "OK", onPress: () => router.back() } // Regresa al Login
      ]);
    } else {
      Alert.alert("Alert", "Checking required fields and email format...");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Create Account</Text>
        
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>First Name</Text>
            <TextInput 
              style={[styles.input, errors.firstName && styles.inputError]} 
              placeholder="John" 
              onChangeText={(v) => setForm({...form, firstName: v})}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput 
              style={[styles.input, errors.lastName && styles.inputError]} 
              placeholder="Doe" 
              onChangeText={(v) => setForm({...form, lastName: v})}
            />
          </View>
        </View>

        <Text style={styles.label}>Mobile Phone</Text>
        <TextInput 
          style={[styles.input, errors.phone && styles.inputError]} 
          placeholder="3186171923" 
          keyboardType="phone-pad"
          onChangeText={(v) => setForm({...form, phone: v})}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="obrero" onChangeText={(v) => setForm({...form, address: v})}/>

        <Text style={styles.label}>Select Country:</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={country} onValueChange={(item) => setCountry(item)}>
            <Picker.Item label="USA" value="USA" />
            <Picker.Item label="Colombia" value="Colombia" />
          </Picker>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={[styles.input, errors.email && styles.inputError]} 
          placeholder="mcgrandom@gmail.com" 
          onChangeText={(v) => setForm({...form, email: v})}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={[styles.input, errors.password && styles.inputError]} 
          placeholder="........." 
          secureTextEntry 
          onChangeText={(v) => setForm({...form, password: v})}
        />

        <TouchableOpacity style={styles.botonSignUp} onPress={handleSignUp}>
          <Text style={styles.textoBoton}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.linkText}>I already have an account</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { padding: 25, paddingTop: 60 },
  titulo: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  label: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9' },
  inputError: { borderColor: 'red', backgroundColor: '#fff5f5' },
  row: { flexDirection: 'row' },
  pickerContainer: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 15 },
  botonSignUp: { backgroundColor: '#b08d3e', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  textoBoton: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  linkText: { color: '#007AFF', textAlign: 'center', marginTop: 20, fontSize: 16 }
});