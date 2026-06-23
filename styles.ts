import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00303b'
  },
  viewTitulo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    borderRadius: 50
  },
  viewQuestao: {
    margin: 8,
    padding: 5,
    width: 'auto',
    height: 'auto',
    alignItems: 'center'
  },
  questao: {
    color: '#ffffff',
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 44,
    fontStyle: 'italic',
    color: '#fff',
  },
  botaoPergunta: {
    backgroundColor: '#00aeff',
    margin: 8,
    borderRadius: 4,
    padding: 5,
    width: 'auto',
    height: 80,
  },
  textBotao: {
    color: '#fff',
    fontSize: 22,
    fontStyle: 'italic'
  },
  viewProximo: {
    alignItems: 'flex-end'
  },
  botaoProximo: {
    backgroundColor: '#00aeff',
    margin: 8,
    borderRadius: 4,
    width: 90,
    height: 32,
  },
  textProximo: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff'
  }
})
export default styles;