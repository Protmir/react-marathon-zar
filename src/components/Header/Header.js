import React from 'react'

import style from "./Header.module.css"

const Header = props => (
    <header className={style.root}>
        <div className={style.forest}></div>
        <div className={style.container}>
            {props.title && <h1>{props.title}</h1>}
            {props.discr && <p>{props.discr}</p>}
        </div>
    </header>
)

export default Header