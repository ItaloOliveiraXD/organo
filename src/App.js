import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#3ABBEE'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Ux e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(prop) {
    console.log('deletando o colaborador', prop)
  }

  function mudarCorDoTime(cor, id) {

    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function resolverFavorito(id) {
      setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times}
        aoTimeCadastrado={novoTime => setTimes([...times, novoTime])}
        aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      {times.map(time =>
        <Time
          id={time.id}
          key={time.id}
          nome={time.nome}
          corPrimaria={time.cor}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          mudarCor={mudarCorDoTime}
          aoDeletar={deletarColaborador} 
          aoFavoritar={resolverFavorito}/>
      )}
      <Rodape />

    </div>
  );
}

export default App;
