import { Image } from "../assets/image";


export const chessPieces = [
    // ^ Black = 1
    { piecetype: 0, teamcolor: 1, PieceID: 0, x: 0, y: 6, image: Image.sipahi_b }, // sipahi
    { piecetype: 0, teamcolor: 1, PieceID: 1, x: 1, y: 6, image: Image.sipahi_b },
    { piecetype: 0, teamcolor: 1, PieceID: 2, x: 2, y: 6, image: Image.sipahi_b },
    { piecetype: 0, teamcolor: 1, PieceID: 3, x: 3, y: 6, image: Image.sipahi_b },
    { piecetype: 0, teamcolor: 1, PieceID: 4, x: 4, y: 6, image: Image.sipahi_b },
    { piecetype: 0, teamcolor: 1, PieceID: 5, x: 5, y: 6, image: Image.sipahi_b },
    { piecetype: 0, teamcolor: 1, PieceID: 6, x: 6, y: 6, image: Image.sipahi_b },
    { piecetype: 0, teamcolor: 1, PieceID: 7, x: 7, y: 6, image: Image.sipahi_b },
    { piecetype: 1, teamcolor: 1, PieceID: 0, x: 0, y: 7, image: Image.hathi_b }, // hathi
    { piecetype: 1, teamcolor: 1, PieceID: 1, x: 7, y: 7, image: Image.hathi_b },
    { piecetype: 2, teamcolor: 1, PieceID: 0, x: 1, y: 7, image: Image.ghodo_b }, // ghodo
    { piecetype: 2, teamcolor: 1, PieceID: 1, x: 6, y: 7, image: Image.ghodo_b },
    { piecetype: 3, teamcolor: 1, PieceID: 0, x: 2, y: 7, image: Image.uut_b }, // uut
    { piecetype: 3, teamcolor: 1, PieceID: 1, x: 5, y: 7, image: Image.uut_b },
    { piecetype: 4, teamcolor: 1, PieceID: 0, x: 3, y: 7, image: Image.vajir_b }, // vajir
    { piecetype: 5, teamcolor: 1, PieceID: 0, x: 4, y: 7, image: Image.king_b }, // king


    // ^ White = 0
    { piecetype: 0, teamcolor: 0, PieceID: 0, x: 0, y: 1, image: Image.sipahi_w }, // sipahi (left side thi)
    { piecetype: 0, teamcolor: 0, PieceID: 1, x: 1, y: 1, image: Image.sipahi_w },
    { piecetype: 0, teamcolor: 0, PieceID: 2, x: 2, y: 1, image: Image.sipahi_w },
    { piecetype: 0, teamcolor: 0, PieceID: 3, x: 3, y: 1, image: Image.sipahi_w },
    { piecetype: 0, teamcolor: 0, PieceID: 4, x: 4, y: 1, image: Image.sipahi_w },
    { piecetype: 0, teamcolor: 0, PieceID: 5, x: 5, y: 1, image: Image.sipahi_w },
    { piecetype: 0, teamcolor: 0, PieceID: 6, x: 6, y: 1, image: Image.sipahi_w },
    { piecetype: 0, teamcolor: 0, PieceID: 7, x: 7, y: 1, image: Image.sipahi_w },
    { piecetype: 1, teamcolor: 0, PieceID: 0, x: 0, y: 0, image: Image.hathi_w }, // hathi
    { piecetype: 1, teamcolor: 0, PieceID: 1, x: 7, y: 0, image: Image.hathi_w },
    { piecetype: 2, teamcolor: 0, PieceID: 0, x: 1, y: 0, image: Image.ghodo_w }, // ghodo
    { piecetype: 2, teamcolor: 0, PieceID: 1, x: 6, y: 0, image: Image.ghodo_w },
    { piecetype: 3, teamcolor: 0, PieceID: 0, x: 2, y: 0, image: Image.uut_w }, // uut
    { piecetype: 3, teamcolor: 0, PieceID: 1, x: 5, y: 0, image: Image.uut_w },
    { piecetype: 4, teamcolor: 0, PieceID: 0, x: 3, y: 0, image: Image.vajir_w }, // vajir
    { piecetype: 5, teamcolor: 0, PieceID: 0, x: 4, y: 0, image: Image.king_w }, // king
];