import { BOARD } from "../interfaces/interFace";
import { chessPieces } from "../utils/chessPieces";



const Tile = ({ flag, num, x, y }: BOARD): JSX.Element => {

    let image = undefined;

    for (const p of chessPieces) {
        if (x === p.x && y === p.y) {
            image = p.image;
        }
    }




    return (
        <span className={`chess_tile ${flag ? 'black_tile' : 'white_tile'}`}>{image && <img src={image} />} </span>
    )
}

export default Tile;