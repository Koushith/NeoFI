import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import useWebSocket from "react-use-websocket";

export const CoinContext = createContext(null);

export const CoinProvider = (props) => {
  const { children } = props;

  const [selectedCoin, setSelectedCoin] = useState("MATIC");
  const [socketUrl, setSocketUrl] = useState(
    `wss://stream.binance.com:9443/ws/${String(
      selectedCoin
    ).toLowerCase()}usdt@trade`
  );
  const [coinPrice, setCoinPrice] = useState(null);

  const getSocketUrl = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(socketUrl);
      }, 1000);
    });
  }, []);

  const { lastMessage, readyState } = useWebSocket(socketUrl, getSocketUrl);

  useEffect(() => {
    setSocketUrl(
      `wss://stream.binance.com:9443/ws/${String(
        selectedCoin
      ).toLowerCase()}usdt@trade`
    );
  }, [selectedCoin]);

  useEffect(() => {
    if (lastMessage?.data) {
      setCoinPrice(JSON.parse(lastMessage?.data));
    }
  }, [lastMessage, readyState]);

  const values = {
    coinPrice,
    setCoinPrice,
    selectedCoin,
    setSelectedCoin,
  };

  return <CoinContext.Provider value={values}>{children}</CoinContext.Provider>;
};

export const useCoin = () => useContext(CoinContext);
