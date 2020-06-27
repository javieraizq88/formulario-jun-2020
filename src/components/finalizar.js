import React, { useContext } from "react"
import { Context } from "../store/appContext"
import Header from "./header"
import { Link } from "react-router-dom"

const Finalizar = props => {
    const { store , actions } = useContext(Context)

    console.log(store.name)
    console.log(store.age)
if (store.nike !== "") {
    console.log("Nike = " + store.nike)
} else {
    console.log("Nike no fue elegida")
}

if (store.puma !== "") {
    console.log("Puma = " + store.puma)
} else {
    console.log("Puma no fue elegida")
}

if (store.adidas !== "") {
    console.log("Adidas = " + store.adidas)
} else {
    console.log("Adidas no fue elegida")
}

return (
    <div >
    <div className="card-group ">
        <div className=" card-body col-md-1 col-xs-1"></div>
        <div className="card-body col-md-10 col-xs-10"
            id="container1">
            <Header />
            <h2
                id="subtitulo-finalizar">
                Muchas gracias por completar la encuesta
                </h2>
                <Link
                        id="boton-volver-home"
                        to="/">
                        <button
                            type="button"
                            className="btn btn-success">
                            Completar otra encuesta
                        </button>
                    </Link>

        </div>
    </div>
</div>
)

}

export default Finalizar