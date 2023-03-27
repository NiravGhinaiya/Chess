import { socket } from "./socket";
import { socketSignUp, socketSelectTable } from "../store/actionCreators";
import { Dispatch } from "redux";


export const SocketOnEvent = (dispatch: Dispatch) => {

    socket.on("SIGN_UP", (data) => {

        dispatch(socketSignUp(data))

    })

    socket.on("SELECT_TABLE", (data) => {
        let payload = JSON.parse(data)
        console.log("SELECT_TABLE", payload);
        dispatch(socketSelectTable(payload))
    })

    socket.on("GAME_START", (data) => {
        console.log("GAME_START", data);
    })

    socket.on("COLLECT_ENTRYFEE", (data) => {
        console.log("COLLECT_ENTRYFEE", data);
    })

    socket.on("TURN_INFO", (data) => {
        console.log("TURN_INFO", data);
    })

    socket.on("PLAYER_INFO", (data) => {
        console.log("PLAYER_INFO", data);
    })

    socket.on("MOVE", (data) => {
        console.log("MOVE", data);
    })

    socket.on("TURN_INFO", (data) => {
        console.log("TURN_INFO", data);
    })

    socket.on("EXCHANGE", (data) => {
        console.log("EXCHANGE", data);
    })

    socket.on("CHECK_MOVE", (data) => {
        console.log("CHECK_MOVE", data);
    })

    socket.on("WINNING", (data) => {
        console.log("WINNING", data);
    })

}