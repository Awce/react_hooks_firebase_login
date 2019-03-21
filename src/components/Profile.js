import React, { useEffect, useState } from 'react'
import { logOut } from '../services/firebase'
import toastr from 'toastr'

export default ({ history }) => {
    let [user, setUser] = useState(null)
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        if (!user) history.goBack()
        else setUser(user)
    }, [])

    function cerrarSesion() {
        logOut()
            .then(() => {
                toastr.info("Adios morro!")
                history.push('/')
            })
    }

    return <div style={{ textAlign: "center" }}>
        {user ? <div>
            <img src={user.photoURL} alt="user" />
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
        </div> : null}
        <button
            onClick={cerrarSesion}
            className="nav-button">
            Cerrar Sesión
        </button>
    </div>
}

// no dejarme entrar a login si YA estoy logueado
