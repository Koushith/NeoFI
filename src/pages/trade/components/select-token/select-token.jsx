import { useCoin } from "../../../../context";
import { usdToInr } from "../../../../utils";
import { LabelContainer, StyledSelcect } from "./select-toke,styles";

export const SlectToken = (props) => {
  const { label = "Current Value", value = "2548714", onClick } = props;

  const { coinPrice, setCoinPrice } = useCoin();
  return (
    <>
      <LabelContainer>
        <label>{label}</label>
        <p>₹ {usdToInr(coinPrice?.p).toFixed(2)}</p>
      </LabelContainer>
      <StyledSelcect onClick={onClick}>
        <div className="container">
          <div className="left">
            <img
              src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/eth.svg"
              alt="colin"
            />
            <p className="token-name">Etherium</p>
          </div>
          <div className="right">
            <i className="fa-sharp fa-solid fa-caret-down"></i>
          </div>
        </div>
      </StyledSelcect>
    </>
  );
};
