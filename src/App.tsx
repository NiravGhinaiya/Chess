import React, { useEffect, useState } from "react";
import RoutesComponent from "./routes/RoutesComponent";
import { socket } from "./socket/socket";
import { useSelector } from "react-redux";
import { Dispatch } from "redux"
import { addArticle, removeArticle } from "./store/actionCreators";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";

export default function App() {

  const dispatch: Dispatch<any> = useDispatch()
  const [first, setFirst] = useState<number>(0)
  const state: readonly IArticle[] = useSelector((state: ArticleState) => state.articles)


  useEffect(() => {

    document.documentElement.style.setProperty('--swiper-theme-color', '#e7c900');
    document.documentElement.style.setProperty('--swiper-pagination-bullet-vertical-gap', '18px');
    document.documentElement.style.setProperty('--swiper-pagination-bullet-border-radius', '10%');
    document.documentElement.style.setProperty('--swiper-pagination-bullet-inactive-color', '#e7c900');
    document.documentElement.style.setProperty('--swiper-pagination-bullet-width', '5px');
    document.documentElement.style.setProperty('--swiper-pagination-right', '80px');
    document.documentElement.style.setProperty('--swiper-pagination-bullet-height', '5px');
    document.documentElement.style.setProperty('--chessapp-primer-color', '#e7c900');

    socket.on("connect", () => {
      console.log("connected", socket.connected, "ID", socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("SELECT_TABLE", (data) => console.log("SELECT_TABLE" + data));

  }, [socket])



  // const saveArticle = (article: IArticle) => dispatch(removeArticle(article))
  // const saveArticle123 = () => dispatch(addArticle(first))

  return (
    <Layout>
      <RoutesComponent />
    </Layout>
  );
}