import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import "./App.sass"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MAX_GRID_SIZE = [7,7]
const stuff = ["-", "E", "G", "S", "-"]

const App = () => {
    const [UID, setUID] = useState(nanoid())
    const [gridMap, setGridMap] = useState([])

    useEffect(() => {
        if(!UID) return
        // generate initial map
        let [rows, cols] = MAX_GRID_SIZE
        const grid = []
        for (let i = 0; i < rows; i++) {
            grid[i] = []
            for (let j = 0; j < cols; j++) {
                grid[i][j] = stuff[getRandomInt(0, 4)]
            }
        }
        setGridMap(grid)
    }, [UID])

    useEffect(()=> {
        if(!gridMap.length) return 
        console.log(gridMap)
    }, [gridMap])


    return (
        <div className="App">
            <button onClick={() => setUID(nanoid())}>Shuffle</button>
            <p className="iteration">
                Iteration: {UID}
            </p>
            <div className="Map">
                {
                    gridMap.map((row) => {
                        return (
                            <div key={nanoid()} className="Row">
                                { row.map((tile) => (<div key={nanoid()} className="Tile">{tile}</div>)) }
                            </div>)
                    })
                }
            </div>
        </div>
    )
}
export default App
