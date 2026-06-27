import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import api from './src/services/api'
import { useEffect, useState } from 'react';
import styles from './styles';
import update from './src/services/updateServices';


function App() {
  const [questao, setQuestao] = useState('Conectando...');
  const [perguntas, setPerguntas] = useState<string[]>([]);
  const [respostaCorreta, setRespostaCorreta] = useState('');
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);
  
  async function buscaDados(){
    const dados = await api();
  
    if(dados && dados.results){
      dados.results.map((item:any)=>{
        setQuestao(item.question)
        setRespostaCorreta(item.correct_answer);
        setOpcaoSelecionada(null);
        
        const listaPerguntas = ([...item.incorrect_answers, item.correct_answer]);
        setPerguntas(listaPerguntas)
      })
    }
  }
  useEffect(()=>{
    buscaDados();
    update();
  },[])
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.viewTitulo}>
          <Text style={styles.titulo}>Trivial Game</Text>
        </View>
        <View>
          <View style={styles.viewQuestao}>
            <Text style={styles.questao}>{questao}</Text>
          </View>
          {perguntas.map((item, index) => {
            let corBotao = '#00aeff';
            const Respondeu = opcaoSelecionada !== null;

            if(Respondeu){
              if(item === respostaCorreta){
                corBotao = '#2E7D32'
              }else if (item === opcaoSelecionada){
                corBotao = '#C62828'
              }
            }
            return <TouchableOpacity 
            key={index}
            style={[styles.botaoPergunta, {backgroundColor: corBotao}]}
            onPress={() => setOpcaoSelecionada(item)}
            disabled={Respondeu}>
              <Text style={styles.textBotao}>{item}</Text>
            </TouchableOpacity>
          })}
        </View>
        <View style={styles.viewProximo}>
          <TouchableOpacity
          style={styles.botaoProximo}
          onPress={() => buscaDados()}>
            <Text style={styles.textProximo}>Proximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
export default App;

