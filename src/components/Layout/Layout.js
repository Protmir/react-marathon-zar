import React from 'react'

import style from "./Layout.module.css"

const Layout = props => {
    const bg = props.urlBg ? {backgroundImage: `url(${(props.urlBg)})`} : props.colorBg ? {background: (props.colorBg)} : {}
    console.log(bg)
     return (
        <section className={style.root} id={props.id} style={bg}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        {props.title ? <h3>{props.title}</h3> : {}}
                        <span className={style.separator}></span>
                    </div>
                    <div className={style.desc}>
                        {props.discr ? <h3>{props.discr}</h3> : {}}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout