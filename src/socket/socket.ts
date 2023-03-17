import io, { Socket } from "socket.io-client";

const endPoint: string = process.env.REACT_APP_END_POINT as string;

export const socket: Socket = io(endPoint);