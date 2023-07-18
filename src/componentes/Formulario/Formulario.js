import './Formulario.css'
import CampoTexto from '../CampoTexto'

export const Formulario = () => {
    return (
        <section className='formulario'>
            <form action="">
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome." />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo." />
                <CampoTexto label="Imagem" placeholder="Digite o endereço de sua imagem." />
            </form>
        </section>
    )
}