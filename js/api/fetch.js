async function requisicao(){
    try {
      const resposta = await fetch('http://localhost:3000/api', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!resposta.ok) {
        throw new Error('Erro ao fazer a requisição');
      }
  
      const data = await resposta.json()
      return data
    } catch (error) {
      console.error('Erro:', error);
    }
}

const data = await requisicao()
export default data
  

  