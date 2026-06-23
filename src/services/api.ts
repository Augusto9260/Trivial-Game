async function buscarDados(){
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=1');

    if(!response.ok){
      throw new Error(`Error no servidor codigo: ${response.status}`);
    }
    const dadosConvertidos = await response.json();
    return dadosConvertidos;
  } catch (error) {
    console.log(error)
  }
}
export default buscarDados;