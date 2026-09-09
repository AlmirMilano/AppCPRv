import React from 'react';

import {
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
    COLORS,
    styles,
} from '../styles/AppStyles';


// =====================================================
// BOTÃO PADRÃO DO MENU
// =====================================================

const BotaoMenu = ({
  icon,
  texto,
  texto2,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={onPress}
      activeOpacity={0.8}
    >

      <MaterialCommunityIcons
        name={icon}
        size={42}
        color={COLORS.white}
      />
        )

      <Text style={styles.menuText}>
        {texto}
      </Text>

      {texto2 && (
        <Text style={styles.menuText}>
          {texto2}
        </Text>
      )}

    </TouchableOpacity>
  );
};


// =====================================================
// TELA HOME
// =====================================================

const HomeScreen = ({ navigation }) => {

  // ===================================================
  // FUNÇÕES DOS BOTÕES
  // ===================================================

  const abrirArvec = () => {
    console.log('ARVEC');
  };

  const abrirFisc = () => {
    console.log('FISC.');
  };

  const abrirRecibo = () => {
    console.log('RECIBO');
  };

  const abrirTrucan = () => {
    console.log('TRUCAN');
  };

  const abrirOperacoes = () => {
    console.log('OPERAÇÕES');
  };

  const abrirUsuario = () => {
    console.log('USER OFFLINE');
  };

  const abrirDetrans = () => {
    console.log('DETRANS');
  };

  const abrirTacografo = () => {
    console.log('TACÓGRAFO');
  };

  const abrirDebitos = () => {
    console.log('DÉBITOS');
  };

  const abrirApps = () => {
    console.log('APPS');
  };

  const abrirImpressora = () => {
    console.log('IMPRESSORA');
  };

  const abrirBat = () => {
    console.log('BAT - ACIDENTE DE TRÂNSITO');
  };


  // ===================================================
  // LOGOUT
  // ===================================================

  const sair = () => {
    console.log('Logout');
  };


  // ===================================================
  // RENDER
  // ===================================================

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'bottom']}
    >

      <StatusBar
        hidden={false}
        translucent={false}
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />


      <View style={styles.homeContainer}>


        {/* =================================================
            CABEÇALHO
        ================================================= */}

        <View style={styles.header}>

          {/* TÍTULO */}

          <View style={styles.headerTitleContainer}>

            <Text style={styles.headerTitle}>
              CPRv -
            </Text>

            <Text style={styles.headerTitle}>
              Operacional
            </Text>

          </View>


          {/* LOGOS */}

          <Image
            source={require('../assets/logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />


          {/* USUÁRIO */}

          <Text style={styles.userName}>
            ALMIR
          </Text>


          {/* LOGOUT */}

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={sair}
            activeOpacity={0.7}
          >

            <MaterialCommunityIcons
              name="logout"
              size={34}
              color={COLORS.white}
            />

          </TouchableOpacity>

        </View>


        {/* =================================================
            MENU PRINCIPAL
        ================================================= */}

        <View style={styles.homeContent}>


          {/* =================================================
              LINHA 1
          ================================================= */}

          <View style={styles.menuRow}>

            <BotaoMenu
              icon="tow-truck"
              texto="Arvec"
              onPress={abrirArvec}
            />

            <BotaoMenu
              icon="clipboard-edit-outline"
              texto="Fisc."
              onPress={abrirFisc}
            />

            <BotaoMenu
              icon="file-document-outline"
              texto="Recibo"
              onPress={abrirRecibo}
            />

          </View>


          {/* =================================================
              LINHA 2
          ================================================= */}

          <View style={styles.menuRow}>

            <BotaoMenu
              icon="bullhorn-outline"
              texto="Trucan"
              onPress={abrirTrucan}
            />

            <BotaoMenu
              icon="traffic-cone"
              texto="Operações"
              onPress={abrirOperacoes}
            />

            <BotaoMenu
              icon="account-circle-outline"
              texto="User"
              texto2="Offline"
              onPress={abrirUsuario}
            />

          </View>


          {/* =================================================
              LINHA 3
          ================================================= */}

          <View style={styles.menuRow}>

            <BotaoMenu
              icon="file-search-outline"
              texto="Detrans"
              onPress={abrirDetrans}
            />

            <BotaoMenu
              icon="timer-outline"
              texto="Tacógrafo"
              onPress={abrirTacografo}
            />

            <BotaoMenu
              icon="cash-multiple"
              texto="Débitos"
              onPress={abrirDebitos}
            />

          </View>


          {/* =================================================
              LINHA 4
          ================================================= */}

          <View style={styles.menuRow}>

            <BotaoMenu
              icon="cellphone"
              texto="APPS"
              onPress={abrirApps}
            />

            <BotaoMenu
              icon="printer-outline"
              texto="Impressora"
              onPress={abrirImpressora}
            />

            {/* =================================================
                BAT
                ÍCONE TEMPORÁRIO
            ================================================= */}

            <BotaoMenu
                icon="car-emergency"
                texto="BAT"
                onPress={abrirBat}
            />

          </View>


        </View>


        {/* =================================================
            RODAPÉ
        ================================================= */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Desenvolvido pelo Sd PM Milano
          </Text>

          <Text style={styles.footerVersion}>
            Versão 1.0.0
          </Text>

        </View>


      </View>

    </SafeAreaView>
  );
};


export default HomeScreen;