const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
            name: "",
            age: "",
            answer3: null,
            answer4: null,
        },

        actions: {

            handleChange: e => {
                setStore ({
                    [e.target.name]: e.target.value
                })
            },




            // getRespuesta1: () => {
            //     fetch(store, {
            //         method: "GET",
            //         headers:{
            //             "Content-Type": "application/json"
            //         }
            //     })
            //     .then(resp => resp.json())
            //     .then(data => {
            //         setStore({
            //             respuesta1: data
            //         });
            //     }).catch(error => {
            //         console.log(error)
            //     })
            // },




            getVehicles: url => {
                fetch(url, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                }) // por default es GET
                .then(response => response.json())
                .then(data => {
                    setStore({
                        vehicles: data
                    });
                }).catch(error => {
                    console.log(error)
                })
            },

            getSpecies: url => {
                fetch(url, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                }) // por default es GET
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        species: data
                    });
                }).catch(error => {
                    console.log(error)
                })
            },
            
            getPlanets: url => {
                fetch(url, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                }) // por default es GET
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        planets: data
                    });
                }).catch(error => {
                    console.log(error)
                })
            },
        } //almacena fx
    }
}

export default getState;