import './CampoTexto.css'

export const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} type="text"/>
        </div>
    )
}