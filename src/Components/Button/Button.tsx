interface ButtonProps {
    title: string,
    shadow: boolean,
    style: string | undefined
}

const Button = ({
    title,
    shadow = false,
    style
}: ButtonProps) => {

    return (
        <button
            type="button"
            className={`font-bold text-zinc-50 bg-orange-600/80 px-8 py-3 rounded-3xl ${shadow && 'shadow-xl'} shadow-orange-600/50 active:shadow-none ${style} sm:px-4`}>
            {title}
        </button>
    );
}

export default Button;