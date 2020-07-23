import React from 'react'

const Names = () => {
    let names = ["Bárbara", "Carla", "Andrés"];

    function sort() {
        return names.sort();
    }; // this function sort the names of the array "names"
    console.log(sort()); //this print the sorting names in the console

    let numb = [1, 2, 3, 4, 5] //number array

    function number() {
        return (
            numb.reduce(
                function sum (a, b) {
                    return (a + b);
                }
            )
        )
    }
    
    console.log(number()); 
    
    // the function sum, make the sum the numbers of array "numb" and print the result in the console

    return (
        <div className="container">
            <div className="card pt-3 mt-5 col-md-12 col-xs-10"> {/*responsive*/}
                <div className="card-header">
                    <h3> Names</h3>
                </div>
                <div className="card-body">
                    {names.map((name, i) => {
                        return (
                            <ol key={i}>{name}</ol>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Names;