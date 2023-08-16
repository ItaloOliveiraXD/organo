import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

export const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar, id, favorito, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(id)} />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favorito'>
                    {favorito
                        ? <AiFillHeart {...propsFavorito} color='#ff0000'/>
                        : <AiOutlineHeart {...propsFavorito} color='#ff0000'/>
                    }
                </div>
            </div>
        </div>
    )
}