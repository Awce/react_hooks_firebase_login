import React, { useEffect, useState } from 'react'
import estilos from './Login.module.css'
import { googleLogin } from '../services/firebase'

// un servicio que cierre en firebase
// tambien que borre el user del localstorage
// 3 un botton que te redireccione a home

export default ({ history }) => {
    let [user, setUser] = useState(null)
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user) history.push('/profile')
    }, [])

    function login() {
        googleLogin()
            .then(user => {
                // redireccionarnos a profile
                history.push('/profile')
            })
    }
    if (user) return null
    return <div style={styles.container} >
        <button
            onClick={login}
            className={estilos.bliss}
            style={styles.gmail}
        >
            Inicia Sesión con Google
    </button>
    </div>
}

let styles = {
    container: {
        textAlign: "center",
        marginTop: 30
    },
    gmail: {
        padding: "5px 15px",
        background: "red",
        color: "white",
        cursor: "pointer"
    }
}