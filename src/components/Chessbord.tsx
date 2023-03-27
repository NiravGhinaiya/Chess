import { useEffect } from "react";
import { BOARD } from "../interfaces/interFace";
import { Cursor } from "./Cursor";
import Tile from "./Tile";
import { ArticleState } from "../store/type";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const Chessbord = () => {


    const state: ArticleState = useSelector((state: ArticleState) => state)
    const { playerList, board } = state

    const localBoard: BOARD[] = [];
    const xAxis = ['0', '1', '2', '3', '4', '5', '6', '7']
    const yAxis = ['0', '1', '2', '3', '4', '5', '6', '7'];

    for (let y = yAxis.length - 1; y >= 0; y--) {
        for (let x = 0; x < xAxis.length; x++) {

            const num: number = x + y + 2;

            if (num % 2 === 0) {
                localBoard.push({ x, y, flag: true, })
            } else {
                localBoard.push({ x, y, flag: false, })
            }

        }
    }

    return (
        <Cursor>
            <div className="App" >
                <div className='chessbord' >
                    {playerList.length > 1 || board
                        ? localBoard.map((localBoard) => {
                            return <Tile key={`${localBoard.x},${localBoard.y}`} {...localBoard} />;
                        })
                        : <Spinner text={'Waiting For 2nd Player'} />
                    }
                </div>
            </div>
        </Cursor>
    )
}

export default Chessbord
