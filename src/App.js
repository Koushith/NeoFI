import { Outlet } from "react-router-dom";
import { Container, NavBar } from "./components";
import { BINANCE_API_BASE, BINANCE_WS_BASE } from "./utils";
import { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
export const App = () => {
  const [socketUrl, setSocketUrl] = useState(
    "wss://stream.binance.com:9443/ws/bnbusdt@trade"
  );

  const [coinPrice, setCounPrice] = useState(null);

  const getSocketUrl = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(socketUrl);
      }, 5000);
    });
  }, []);

  const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(
    socketUrl,
    getSocketUrl
  );

  useEffect(() => {
    if (lastMessage?.data) {
      setCounPrice(JSON.parse(lastMessage?.data));
    }
  }, [lastMessage, readyState]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <>
      <NavBar />
      {/* <div>
        <span style={{ fontSize: 30 }}>
          The WebSocket is currently {connectionStatus}
        </span>
        {lastMessage ? (
          <span style={{ fontSize: 30 }}>
            {" "}
            Last message: {lastMessage.data}
          </span>
        ) : null}

        <h1>{Number(coinPrice?.p)}</h1>
      </div> */}
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
