import './Formulario.css'
import Campo from '../Campo'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({ times, aoColaboradorCadastrado, aoTimeCadastrado }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');




    const aoSalvarColaborador = (evento) => {
        evento.preventDefault();
        
        aoColaboradorCadastrado({
            id: uuidv4(),
            favorito: false,
            nome,
            cargo,
            imagem,
            time
        })

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');

    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault();

        aoTimeCadastrado({
            id: uuidv4(),
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime('');
        setCorTime('');
    }

    return (
        <section className='formulario'>
            <form action="" onSubmit={aoSalvarColaborador}>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome."
                    valor={nome}
                    aoAlterado={ valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo."
                    valor={cargo}
                    aoAlterado={ valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite a url do seu perfil Github.png"
                    valor={imagem}
                    aoAlterado={ valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar colaborador</Botao>
            </form>

            <form action="" onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio
                    label="Nome do time"
                    placeholder="Digite o nome do time."
                    valor={nomeTime}
                    aoAlterado={ valor => setNomeTime(valor)}
                />
                <Campo
                    tipo={'color'}
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time."
                    valor={corTime}
                    aoAlterado={ valor => setCorTime(valor)}
                />
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}