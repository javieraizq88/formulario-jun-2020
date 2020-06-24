const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
            respuesta1: null,
            respuesta2: null,
            respuesta3: null,
            respuesta4: null,
        },

        actions: {
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

            getFilms: url => {
                fetch(url, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        films: data
                    });
                }).catch(error => {
                    console.log(error)
                })
            },

            getStarships: url => {
                fetch(url, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                }) 
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        starships: data
                    });
                }).catch(error => {
                    console.log(error)
                })
            },

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