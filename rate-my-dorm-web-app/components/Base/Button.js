import Link from "next/link";

const Button = ({ link, children, onClick = () => {}, disabled=false }) => {
    return (
        <button type="submit" onClick={onClick} className="px-4 py-2 font-semibold transition duration-200 ease-in-out rounded-md shadow-md to-charcoal from-cadet bg-gradient-to-r hover:shadow-lg">
            <Link href={link} passHref className={disabled ? "pointer-events-none" : ""}>
                <span className="font-normal text-cultured">{children}</span>
            </Link>
        </button>
    );
};

export default Button;