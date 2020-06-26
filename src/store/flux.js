const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
            name: "",
            age: "",
            marca: {},
        },

        actions: {

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            cambiarCheckbox: (e) => {
                const store = getStore()
                console.log ( store.marca.hasOwnProperty(e.target.name) )
                if (store.marca.hasOwnProperty(e.target.name)) {
                    const aux = {...store.marca}
                    delete aux[ e.target.name ]
                    setStore ({marca: aux })
                }
                else {
                    setStore ({ marca: {...store.marca, [e.target.name]: e.target.value} })
                }
            }
            // le da un valor segun el atributo name y lo agrega al objeto vacío "marca"



        } //almacena fx
    }
}

export default getState;