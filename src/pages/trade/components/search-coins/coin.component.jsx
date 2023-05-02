import { CoinContainer } from "./search-coins.styles";
import CheckMark from "../../../../assets/icons/selected.svg";

export const Coin = (props) => {
  const { coinDetails, index, isSelected, onClick } = props;

  return (
    <CoinContainer
      onClick={onClick}
      style={{ background: isSelected ? "#1b192d" : "transparent" }}
    >
      <div className="left">
        <img
          src={`https://coinicons-api.vercel.app/api/icon/${String(
            coinDetails
          ).toLowerCase()}`}
          alt="colin"
          width={24}
        />
        <p className="token-name">{coinDetails}</p>
      </div>

      <div className="right">
        {/* <img src={CheckMark} alt="check-mark" /> */}
        {isSelected && <img src={CheckMark} alt="check-mark" />}
      </div>
    </CoinContainer>
  );
};
