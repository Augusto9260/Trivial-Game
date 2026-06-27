import { Alert, Linking } from "react-native";
import { version as APP_VERSION } from "../../package.json";

async function updateServices(){
  const response = await fetch('https://api.github.com/repos/Augusto9260/Trivial-Game/releases/latest')

  const dados = await response.json();
  const versionWeb = dados.tag_name;
  const clearVersion = versionWeb.replace(/^v/i, '');

  if(APP_VERSION !== clearVersion){
    Alert.alert('Atenção', `Nova versão encontrada (${clearVersion}) deseja atualizar ?`, [
      {
        text: 'Cancelar',
        onPress: () => Alert.alert('Atualização cancelada'),
        style: 'cancel',
      },
      {
        text: 'Baixar', onPress: () =>  Linking.openURL(dados.assets[0].browser_download_url)
      }
    ])
    dados.assets[0].browser_download_url
  }

  
}
export default updateServices;