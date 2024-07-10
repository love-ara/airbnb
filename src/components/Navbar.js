import image from "../images/logo.png"
import style from "../style.module.css"

export default function Navbar() {
    return (
        <nav>
            <img src={image} className={style.logo}/>
        </nav>
    )
}