import {
  Dimensions,
  StyleSheet,
} from 'react-native';


// =====================================================
// DIMENSÕES
// =====================================================

const { width: SCREEN_WIDTH } = Dimensions.get('window');


// =====================================================
// CORES
// =====================================================

export const COLORS = {
  primary: '#E67E22',
  white: '#FFFFFF',
  blue: '#087FF5',

  black: '#222222',
  text: '#333333',

  placeholder: '#777777',
  border: '#555555',
};


// =====================================================
// DIMENSIONAMENTO DOS BOTÕES
// =====================================================

const SIDE_MARGIN = 10;

const BUTTON_GAP = 16;

const BUTTON_WIDTH =
  (SCREEN_WIDTH - (SIDE_MARGIN * 2) - (BUTTON_GAP * 2)) / 3;


// =====================================================
// ESTILOS
// =====================================================

export const styles = StyleSheet.create({

  // ===================================================
  // SAFE AREA
  // ===================================================

  safeArea: {
    flex: 1,

    backgroundColor: COLORS.primary,
  },


  // ===================================================
  // HOME
  // ===================================================

  homeContainer: {
    flex: 1,

    backgroundColor: COLORS.white,
  },


  // ===================================================
  // CABEÇALHO
  // ===================================================

  header: {
    height: 65,

    width: '100%',

    backgroundColor: COLORS.primary,

    flexDirection: 'row',

    alignItems: 'center',

    paddingLeft: 16,

    paddingRight: 7,
  },


  // ===================================================
  // TÍTULO
  // ===================================================

  headerTitleContainer: {
    flex: 1,

    height: 65,

    justifyContent: 'center',

    paddingVertical: 4,
  },

  headerTitle: {
    color: COLORS.white,

    fontSize: 16,

    fontWeight: 'bold',

    lineHeight: 18,
  },


  // ===================================================
  // LOGOS
  // ===================================================

  headerLogo: {
    width: 70,

    height: 50,

    marginLeft: 3,

    marginRight: 5,
  },


  // ===================================================
  // NOME DO USUÁRIO
  // ===================================================

  userName: {
    color: COLORS.white,

    fontSize: 17,

    fontWeight: 'bold',

    marginRight: 3,
  },


  // ===================================================
  // BOTÃO SAIR
  // ===================================================

  logoutButton: {
    width: 40,

    height: 55,

    justifyContent: 'center',

    alignItems: 'center',
  },


  // ===================================================
  // CONTEÚDO
  // ===================================================

  homeContent: {
    flex: 1,

    paddingTop: 18,

    paddingLeft: SIDE_MARGIN,

    paddingRight: SIDE_MARGIN,
  },


  // ===================================================
  // LINHA DOS BOTÕES
  // ===================================================

  menuRow: {
    width: '100%',

    flexDirection: 'row',

    marginBottom: 15,
  },


  // ===================================================
  // BOTÕES
  // ===================================================

  menuButton: {
    width: BUTTON_WIDTH,

    height: 100,

    backgroundColor: COLORS.primary,

    borderRadius: 9,

    marginRight: BUTTON_GAP,

    justifyContent: 'center',

    alignItems: 'center',
  },


  // ===================================================
  // TEXTO DOS BOTÕES
  // ===================================================

  menuText: {
    color: COLORS.white,

    fontSize: 16,

    fontWeight: 'bold',

    textAlign: 'center',

    lineHeight: 20,

    marginTop: 1,
  },


  // ===================================================
  // RODAPÉ
  // ===================================================

  footer: {
    width: '100%',

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 20,

    paddingBottom: 10,
  },

  footerText: {
    color: COLORS.black,

    fontSize: 13,

    fontWeight: 'bold',

    textAlign: 'center',

    lineHeight: 18,
  },

  footerVersion: {
    color: COLORS.black,

    fontSize: 13,

    fontWeight: 'bold',

    textAlign: 'center',

    lineHeight: 18,
  },


  // ===================================================
  // LOGIN
  // ===================================================

  loginContainer: {
    flex: 1,

    backgroundColor: COLORS.primary,

    alignItems: 'center',

    paddingHorizontal: 38,
  },

  logosContainer: {
    width: '100%',

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 135,

    marginBottom: 68,
  },

  logo: {
    width: 300,

    height: 150,
  },

  logoBrigada: {
    width: 145,

    height: 145,

    marginRight: 20,
  },

  logoCRPV: {
    width: 145,

    height: 145,

    marginLeft: 10,
  },

  loginTitle: {
    color: COLORS.white,

    fontSize: 25,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 46,
  },

  inputContainer: {
    width: '100%',

    height: 49,

    backgroundColor: COLORS.white,

    borderWidth: 1,

    borderColor: COLORS.border,

    borderRadius: 9,

    marginBottom: 18,

    justifyContent: 'center',
  },

  input: {
    flex: 1,

    paddingHorizontal: 14,

    color: COLORS.text,

    fontSize: 18,
  },

  inputSenha: {
    flex: 1,

    paddingLeft: 14,

    paddingRight: 50,

    color: COLORS.text,

    fontSize: 18,
  },

  eyeButton: {
    position: 'absolute',

    right: 10,

    width: 40,

    height: 45,

    justifyContent: 'center',

    alignItems: 'center',
  },

  loginButton: {
    width: '100%',

    height: 56,

    backgroundColor: COLORS.blue,

    borderRadius: 9,

    marginTop: 17,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 3,
  },

  loginButtonText: {
    color: COLORS.white,

    fontSize: 18,

    fontWeight: 'bold',
  },

});