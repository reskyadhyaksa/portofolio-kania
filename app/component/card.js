const CardComponent = ({message, year}) => {
    return(
        <div className="card bg-black flex flex-col">
            <p className={`font-bold text-center text-xs sm:text-sm mt-5 sm:mt-6 text-[#fff]`}>{year}</p>
            <div className="flex flex-col justify-center items-center h-full pb-2">
                {message.map((text, index) => (
                    <p key={index} className='card-text text-xs sm:text-xs md:text-sm lg:text-xs font-semibold text-center'>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default CardComponent