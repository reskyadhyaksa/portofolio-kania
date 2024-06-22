const CardComponent = ({message, year}) => {
    return(
        <div className="card bg-black flex flex-col">
            <p className={`${message[1].length < 15 ? 'mb-9' : 'mb-8'} font-bold text-center text-sm mt-6 text-[#fff]`}>{year}</p>
            <div className="">
                {message.map((text, index) => (
                    <p key={index} className='card-text text-sm font-semibold text-center'>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default CardComponent