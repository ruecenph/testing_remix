interface IButtonProps {
    title : string
    disabled ?: boolean
}

const Button = ({title, disabled} : IButtonProps) => {
    return (
        <button disabled={disabled}>{title}</button>
    )
}

export default Button
