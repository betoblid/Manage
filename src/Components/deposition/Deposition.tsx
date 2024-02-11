
interface DepositionProps {

    name: string,
    thumb: string,
    description: string
}

const Deposition = ({ description, name, thumb }: DepositionProps) => {

    return (
        <div className="max-w-[420px] w-full flex flex-col items-center justify-center ">
            <div className="bg-gradient-to-b from-[#fff] from-50% to-gray-100 to-50% w-full">
                <img
                    src={thumb}
                    alt={`Nome da Pessoa ${name}`}
                    className="w-20 mx-auto" />
            </div>
            <div className="bg-gray-100 pb-7">
                <h3 className="text-center font-bold my-5 text-Very-Dark-Blue">
                    {name}
                </h3>
                <p className="text-center md:text-[14px] text-Dark-Grayish-Blue w-11/12 mx-auto">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Deposition;