import { Colaborador } from '../Colaborador/Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

export const Time = ({ nome, cor, aoDeletar, colaboradores, mudarCor, id, aoFavoritar}) => {
    const css = { backgroundColor: hexToRgba(cor, 0.4) }

    return (
        (colaboradores.length > 0) && 
        <section className='time' style={css}>
            <input value={cor} onChange={(evento) => mudarCor(evento.target.value, id) } type="color" className='input-cor' />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador) => {
                    return <Colaborador
                        key={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        favorito={colaborador.favorito}
                        corDeFundo={cor}
                        aoDeletar={aoDeletar}
                        id={colaborador.id} 
                        aoFavoritar={aoFavoritar}/>
                })}
            </div>
        </section>
    )
}