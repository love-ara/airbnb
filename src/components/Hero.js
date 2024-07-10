
import React from 'react';
import Navbar from "./Navbar";
import Card from "./Card";
import style from "../style.module.css"
import hero from "../images/img.png"


export default function Hero(){
    return (
        <div>
            <Navbar/>

        <section className="hero">
            <img src={hero} className={style.hero_photo}></img>
            <h1 className={style.hero_header}>Online Experiences</h1>
            <p className={style.hero_text}>Join unique interactive activities led by
                one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
            <Card />
        </div>
    )
}
