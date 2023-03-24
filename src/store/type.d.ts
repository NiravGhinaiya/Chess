interface IArticle {
  id: number
  title: string
  body: string
}

type ArticleState = {
  articles: IArticle[],
  isLoginModalOpen: boolean,
  user: I_SIGNUP_REQUEST_DATA | null
}

type ArticleAction = {
  type: string
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction