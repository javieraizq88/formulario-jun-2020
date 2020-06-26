const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
            name: "",
            age: "",
            nike: null,
            adidas: null,
            puma: null,
        },

        actions: {

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },



        } //almacena fx
    }
}

export default getState;