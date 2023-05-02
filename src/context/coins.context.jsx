import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const CoinContext = createContext(null);

export const CoinProvider = (props) => {
  const { children } = props;

  const [socketUrl, setSocketUrl] = useState(
    "wss://stream.binance.com:9443/ws/bnbusdt@trade"
  );
  const [coinPrice, setCoinPrice] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [allCoins, setAllCoins] = useState(null);

  //   const fetchAllCoins = async () => {
  //     const binanceUrl = "https://api.binance.com/api/v3/exchangeInfo";
  //     try {
  //       const response = await fetch(binanceUrl);
  //       const data = await response.json();
  //       const coins = new Set();
  //       data.symbols.forEach((symbol) => {
  //         coins.add(symbol.baseAsset);
  //         coins.add(symbol.quoteAsset);
  //       });
  //       return [...coins];
  //     } catch (error) {
  //       console.error("Error retrieving list of coins:", error);
  //       return [];
  //     }
  //   };

  async function fetchCoins() {
    const binanceUrl = "https://api.binance.com/api/v3/exchangeInfo";
    return fetch(binanceUrl)
      .then((response) => response.json())
      .then((data) => {
        const coins = new Set();
        data.symbols.forEach((symbol) => {
          coins.add(symbol.baseAsset);
          coins.add(symbol.quoteAsset);
        });

        return [...coins];
      })
      .catch((error) => {
        console.error("Error retrieving list of coins:", error);
        return [];
      });
  }
  useEffect(() => {
    fetchCoins()
      .then((coins) => {
        // do something with coins
        setAllCoins(coins);
        console.log("coinsssssss", coins);
      })
      .catch((error) => {
        // handle error
      });

    console.log("all coinsss", allCoins);
  }, []);

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
      setCoinPrice(JSON.parse(lastMessage?.data));
    }
  }, [lastMessage, readyState]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const values = {
    coinPrice,
    setCoinPrice,
    loading,
    searchQuery,
    allCoins,
    setSearchQuery,
  };

  return <CoinContext.Provider value={values}>{children}</CoinContext.Provider>;
};

export const useCoin = () => useContext(CoinContext);
