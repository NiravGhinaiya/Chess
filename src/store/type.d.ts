import { BOARD_RES, I_SIGNUP_REQUEST_DATA, PLAYER_LIST_DATA } from "../interfaces/interFace";

interface IArticle {
  id: number
  title: string
  body: string
}

type ArticleState = {
  articles: IArticle[],
  isLoginModalOpen: boolean,
  user: I_SIGNUP_REQUEST_DATA ,
  playerList: PLAYER_LIST_DATA[],
  board : BOARD_RES[],
}

type ArticleAction = {
  type: string
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction