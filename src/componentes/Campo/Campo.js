import './Campo.css'

export const Campo = ({ tipo = 'text', label, valor, aoAlterado, placeholder, obrigatorio = false }) => {
    const placeholderModificado = `${placeholder}...`;

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${tipo}`}>
            <label htmlFor="">{label}</label>
            <input
                type={tipo}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificado} />
        </div>
    )
}