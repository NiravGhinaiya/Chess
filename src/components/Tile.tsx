import { useSelector } from "react-redux";
import { Image } from "../assets/image";
import { BOARD } from "../interfaces/interFace";
import { ArticleState } from "../store/type";



const Tile = ({ flag, x, y, }: BOARD): JSX.Element => {

    
    const state: ArticleState = useSelector((state: ArticleState) => state)
    const { board } = state

    let image = undefined;
    let position:any = undefined;

    for (const p of board) {
        if (x === p.x && y === p.y) {
            switch (p.teamcolor) {
                case 1: //Black = 1
                    switch (p.piecetype) {
                        case 0:
                            image = Image.sipahi_b
                            position = p
                            break;
                        case 1:
                            image = Image.hathi_b
                            position = p
                            break;
                        case 2:
                            image = Image.ghodo_b
                            position = p
                            break;
                        case 3:
                            image = Image.uut_b
                            position = p
                            break;
                        case 4:
                            image = Image.vajir_b
                            position = p
                            break;
                        case 5:
                            image = Image.king_b
                            position = p
                            break;
                    }
                    break;
                case 0: // ^ White = 0
                    switch (p.piecetype) {
                        case 0:
                            image = Image.sipahi_w
                            position = p
                            break;
                        case 1:
                            image = Image.hathi_w
                            position = p
                            break;
                        case 2:
                            image = Image.ghodo_w
                            position = p
                            break;
                        case 3:
                            image = Image.uut_w
                            position = p
                            break;
                        case 4:
                            image = Image.vajir_w
                            position = p
                            break;
                        case 5:
                            image = Image.king_w
                            position = p
                            break;
                        default:
                            break;
                    }
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <span className={`chess_tile ${flag ? 'black_tile' : 'white_tile'}`} onClick={() => console.log(position)} >{image && <img src={image} />} </span>
    )
}

export default Tile;