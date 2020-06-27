const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
            name: "",
            age: "",
            marca: {},
            respuesta: {}
        },

        actions: {

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            cambiarCheckbox: (e) => {
                const store = getStore()

                if (store.marca.hasOwnProperty(e.target.name)) {
                    const aux = { ...store.marca }
                    delete aux[e.target.name]
                    setStore({ marca: aux })
                }
                else {
                    setStore({ marca: { ...store.marca, [e.target.name]: e.target.value } })
                }
            },
            // le da un valor segun el atributo name y lo agrega al objeto vacío "marca"

            cambiarRespuesta: (e) => {
                const store = getStore()

                if (store.respuesta.hasOwnProperty(e.target.name)) {
                    const aux = { ...store.respuesta }
                    delete aux[e.target.name]
                    setStore({ respuesta: aux })
                }
                else {
                    setStore({ respuesta: { ...store.respuesta, [e.target.name]: e.target.value } })
                }
            }


        } //almacena fx
    }
}

export default getState;