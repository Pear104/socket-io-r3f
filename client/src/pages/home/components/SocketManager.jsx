import { atom, useAtom } from "jotai";
import React, { useEffect } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3001");
export const charactersAtom = atom([]);
export default function SocketManager() {
  const [_characters, setCharacters] = useAtom(charactersAtom);
  useEffect(() => {
    function onConnected() {
      console.log("connected");
    }

    function onDisconnected() {
      console.log("disconnected");
    }

    function onHello() {
      console.log("Hello");
    }

    function onCharacters(value) {
      setCharacters(value);
    }

    socket.on("connected", onConnected);
    socket.on("disconnected", onDisconnected);
    socket.on("hello", onHello);
    socket.on("characters", onCharacters);
    return () => {
      socket.off("connected", onConnected);
      socket.off("disconnected", onDisconnected);
      socket.off("hello", onHello);
      socket.off("characters", onCharacters);
    };
  }, []);
}
