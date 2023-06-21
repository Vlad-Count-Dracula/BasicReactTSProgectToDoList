import s from './About.module.css';
import { FC } from "react"

const About : FC = () => {
    return (
        <div className={s.about}>
            <h1 className={s.description} >This project created by Klepas</h1>
            <footer className={s.footer}>
            </footer>
        </div>
    )
}

export default About; 

