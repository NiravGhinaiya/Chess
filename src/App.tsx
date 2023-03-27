import React, { useEffect, useState } from "react";
import RoutesComponent from "./routes/RoutesComponent";
import { socket } from "./socket/socket";
import { useSelector } from "react-redux";
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";
import { SocketOnEvent } from "./socket";
import Spinner from "./components/Spinner";

export default function App() {

  const dispatch: Dispatch<any> = useDispatch()

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

    SocketOnEvent(dispatch)

  }, [socket])


  return (
    <Layout>
      <RoutesComponent />
    </Layout>
  );
}