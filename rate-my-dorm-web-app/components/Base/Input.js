const Input = ({ type = "text", name = "", id = "", placeholder = "", value= "", onChange = () => {}}) => {

    return (
        <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} className="px-2 py-2 font-normal transition duration-200 ease-in-out rounded bg-cultured text-eerie-dark" />
    )
}

export default Input;