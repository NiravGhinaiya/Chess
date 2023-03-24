import { BOARD } from "../interfaces/interFace";
import { Cursor } from "./Cursor";
import Tile from "./Tile";

const Chessbord = () => {

    const board: BOARD[] = [];
    const xAxis = ['0', '1', '2', '3', '4', '5', '6', '7']
    const yAxis = ['0', '1', '2', '3', '4', '5', '6', '7'];

    for (let y = yAxis.length - 1; y >= 0; y--) {
        for (let x = 0; x < xAxis.length; x++) {

            const num: number = x + y + 2;

            if (num % 2 === 0) {
                board.push({ x, y, flag: true, num })
            } else {
                board.push({ x, y, flag: false, num })
            }

        }
    }



    return (
        <Cursor >
            <div className="App">
                <div className='chessbord'>
                    {board.map((board) => {
                        return <Tile key={`${board.x},${board.y}`} {...board} />
                    })}
                </div>
            </div>
        </Cursor>
    )
}

export default Chessbord
