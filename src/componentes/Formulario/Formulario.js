import './Formulario.css'
import CampoTexto from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

export const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return (
        <section className='formulario'>
            <form action="" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome."
                    valor={nome}
                    aoAlterado={ valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo." 
                    valor={cargo}
                    aoAlterado={ valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço de sua imagem."
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
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}