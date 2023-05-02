import { useCoin } from "../../../../context";
import { useEffect, useState } from "react";
import { Button } from "../../../../components";
import { SearchCoinsContainer } from "./search-coins.styles";
import { SearchInput } from "../../../../components/primitives/input/search-input";
import { Coin } from "./coin.component";

export const SearchCoins = ({ modal }) => {
  const { selectedCoin, setSelectedCoin } = useCoin();

  const [searchQuery, setSearchQuery] = useState("");
  const [allCoins, setAllCoins] = useState([]);

  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedCoin(item);
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
      setSelectedCoin(item);
    }
  };

  const handelSubmitBtn = () => {
    alert(selectedCoin);
    setSelectedCoin(selectedItem);
    modal(false);
  };

  async function fetchCoins() {
    setLoading(true);
    const binanceUrl = "https://api.binance.com/api/v3/exchangeInfo";
    return fetch(binanceUrl)
      .then((response) => response.json())
      .then((data) => {
        const coins = new Set();
        data.symbols.forEach((symbol) => {
          coins.add(symbol.baseAsset);
          coins.add(symbol.quoteAsset);
        });
        setLoading(false);

        return [...coins];
      })
      .catch((error) => {
        console.error("Error retrieving list of coins:", error);
        return [];
      });
  }

  useEffect(() => {
    fetchCoins().then((coins) => {
      if (coins) {
        setAllCoins(coins);
      }
    });
  }, []);

  const filteredCoin = allCoins.filter((item) =>
    item.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <SearchCoinsContainer>
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
      />

      <div className="result-list">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <>
            {filteredCoin?.slice(0, 20).map((c, index) => (
              <Coin
                key={index}
                coinDetails={c}
                isSelected={selectedItem === c}
                onClick={() => handleClick(c)}
              />
            ))}
          </>
        )}
      </div>
      {!!selectedItem && (
        <Button
          text="Confirm"
          onClick={handelSubmitBtn}
          style={{ width: "100%", marginTop: 22 }}
        />
      )}
    </SearchCoinsContainer>
  );
};
