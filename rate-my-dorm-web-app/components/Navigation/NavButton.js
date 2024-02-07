const NavButton = ({ text }) => {
    return (
        <button className="relative flex items-center justify-center w-10 h-10 text-gray-500 transition duration-200 ease-in-out hover:text-gray-700 hover:underline hover:underline-offset-4">
            {text}
        </button>
    )
}

export default NavButton;