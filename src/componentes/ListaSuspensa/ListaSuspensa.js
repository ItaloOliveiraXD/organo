import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    
    const aoModificado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label htmlFor="">{props.label}</label>
            <select name="" id="" required={props.obrigatorio} value={props.valor} onChange={aoModificado}>
                <option value=""></option>
                {props.itens.map(item => <option key={item.id}>{item.nome}</option>)}
            </select>
        </div>
    )
}