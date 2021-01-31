import React from 'react'

import style from './Layout.module.css'

const Layout = ({id, title,  urlBg, colorBg, children }) => {
    const bg = urlBg ? {backgroundImage: `url(${(urlBg)})`} : (colorBg ? {backgroundColor: (colorBg)} : {})
    return (
        <section className={style.root} id={id} style={bg}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        {title ? <h3>{title}</h3> : {}}
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout