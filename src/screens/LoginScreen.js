import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from '../styles/AppStyles';

const LoginScreen = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    console.log('Matrícula:', matricula);
    console.log('Senha:', senha);

    // Aqui entra posteriormente a autenticação da API
  };

  return (
    <View style={styles.loginContainer}>

        {/* LOGOTIPOS */}
        <View style={styles.logosContainer}>
        <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
        />
        </View>

        {/* TÍTULO */}
        <Text style={styles.loginTitle}>
            Faça seu login
        </Text>

        {/* MATRÍCULA */}
        <View style={styles.inputContainer}>

            <TextInput
            style={styles.input}
            placeholder="Matrícula"
            placeholderTextColor="#777"
            value={matricula}
            onChangeText={setMatricula}
            keyboardType="numeric"
            autoCapitalize="none"
            />

        </View>

        {/* SENHA */}
        <View style={styles.inputContainer}>

        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          placeholderTextColor="#777"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setMostrarSenha(!mostrarSenha)}
        >
          <Ionicons
            name={mostrarSenha ? 'eye-outline' : 'eye'}
            size={24}
            color="#777"
          />
        </TouchableOpacity>

      </View>

      {/* BOTÃO ENTRAR */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.loginButtonText}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;