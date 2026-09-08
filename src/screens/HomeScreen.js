import React from 'react';

import {
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    SafeAreaView,
} from 'react-native-safe-area-context';

import { COLORS, styles } from '../styles/AppStyles';


const HomeScreen = ({ navigation }) => {

    
    // =====================================================
    // NAVEGAÇÃO
    // =====================================================

    const abrirEntrevista = () => {
        navigation.navigate('Entrevista');
    };

    const abrirOndeEstou = () => {
        navigation.navigate('OndeEstou');
    };

    const abrirConsultarVeiculo = () => {
        navigation.navigate('ConsultarVeiculo');
    };

    const abrirConsultarAbordagens = () => {
        navigation.navigate('ConsultarAbordagens');
    };

    const sair = () => {
        console.log('Logout');
    };


    // =====================================================
    // TELA
    // =====================================================

    return (
        <SafeAreaView
        style={styles.safeArea}
        edges={['top', 'bottom']}
        >

        {/* =================================================
            STATUS BAR
        ================================================= */}

        <StatusBar
            hidden={false}
            translucent={false}
            backgroundColor={COLORS.primary}
            barStyle="light-content"
        />


        {/* =================================================
            CONTAINER PRINCIPAL
        ================================================= */}

        <View style={styles.homeContainer}>


            {/* =================================================
                CABEÇALHO
            ================================================= */}

            <View style={styles.header}>

            {/* TÍTULO */}

            <View style={styles.headerTitleContainer}>

                <Text style={styles.headerTitle}>
                CPRvBM
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


            {/* SAIR */}

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
                CONTEÚDO
            ================================================= */}

            <View style={styles.homeContent}>

            {/* PRIMEIRA LINHA */}

            <View style={styles.menuRow}>

                {/* ENTREVISTA */}

                <TouchableOpacity
                style={styles.menuButton}
                onPress={abrirEntrevista}
                activeOpacity={0.8}
                >

                <MaterialCommunityIcons
                    name="account-outline"
                    size={38}
                    color={COLORS.white}
                />

                <Text style={styles.menuText}>
                    Entrevista
                </Text>

                </TouchableOpacity>


                {/* ONDE ESTOU */}

                <TouchableOpacity
                style={styles.menuButton}
                onPress={abrirOndeEstou}
                activeOpacity={0.8}
                >

                <MaterialCommunityIcons
                    name="crosshairs-gps"
                    size={40}
                    color={COLORS.white}
                />

                <Text style={styles.menuText}>
                    Onde Estou?
                </Text>

                </TouchableOpacity>


                {/* CONSULTAR VEÍCULO */}

                <TouchableOpacity
                style={styles.menuButton}
                onPress={abrirConsultarVeiculo}
                activeOpacity={0.8}
                >

                <MaterialCommunityIcons
                    name="car-outline"
                    size={40}
                    color={COLORS.white}
                />

                <Text style={styles.menuText}>
                    Consultar
                </Text>

                <Text style={styles.menuText}>
                    Veículo
                </Text>

                </TouchableOpacity>

            </View>


            {/* SEGUNDA LINHA */}

            <View style={styles.menuRow}>

                {/* CONSULTAR ABORDAGENS */}

                <TouchableOpacity
                style={styles.menuButton}
                onPress={abrirConsultarAbordagens}
                activeOpacity={0.8}
                >

                <MaterialCommunityIcons
                    name="format-list-bulleted"
                    size={40}
                    color={COLORS.white}
                />

                <Text style={styles.menuText}>
                    Consultar
                </Text>

                <Text style={styles.menuText}>
                    Abordagens
                </Text>

                </TouchableOpacity>

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