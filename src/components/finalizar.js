import React, { useContext } from "react"
import { Context } from "../store/appContext"

const Finalizar = props => {
    const { store } = useContext(Context)

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
    <>
    </>
)

}

export default Finalizar