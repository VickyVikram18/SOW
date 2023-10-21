const Card = (props) => {
    const {eachCard} = props
    const {cardImage,cardContent,cardFooter} = eachCard

    return (
        <div className="shadow-[17px_12px_60px_0px_#00000040] ml-7 mb-7 w-[320px] h-[472px]">
            <img src={cardImage} alt={cardFooter} className="w-[320px] h-[249px] "/>
            <p className="font-normal font-['Open_Sans'] text-[16px]/[24px] text-left p-3 h-[170px]">{cardContent}</p>
            <div className="bg-[#F8F8F8]">
                <p className="text-[#887C68] font-normal font-['Open_Sans'] text-[22px]/[29.96px] text-left p-3">{cardFooter}</p>
            </div>
          </div>
    )
}

export default Card