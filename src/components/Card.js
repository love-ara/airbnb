import card from "../images/card.png"
import star from "../images/star.png"
import style from "../style.module.css"


export default function Card(){
    return(
        <div>
            <img src={card}
                 className={style.card_image}
                 alt="Main card image."/>

            <div className={style.card_star}>
                <img src={star} className={style.card_star} alt="Star icon."/>
                <span> 5.0</span>
                <span className= {style.gray}>6</span>
                <span className={style.gray}>USA</span>
            </div>

            <h2>Life Lessons with Katie  Zaferes</h2>
            <p><span className={style.bold}>From $136</span> / person</p>

        </div>
    )
}
