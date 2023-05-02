import { useEffect, useState } from "react";
import { Button, Input, Modal, Spacer } from "../../../../components";
import { SlectToken } from "../select-token/select-token";
import { SearchCoins } from "../search-coins/search-coins.component";
import { FormContainer } from "./trade-form.styles";
import { useCoin } from "../../../../context";
import { usdToInr } from "../../../../utils";

export const TradeForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [investingAmount, setInvestingAmount] = useState(0);
  const [estimatedReturn, setEstimatedReturn] = useState(0);

  const handleModalClose = () => {
    setShowModal(false);
  };
  const {
    coinPrice,
    setCoinPrice,
    selectedCoin = "BTC",
    setSelectedCoin,
  } = useCoin();

  const onChangeHandler = (e) => {
    setInvestingAmount(e.target.value);
  };

  useEffect(() => {
    // setEstimatedReturn();
    /**
     * INR Value = USDT Value * USDT/INR Exchange Rate
     */

    const coinPriceInINR = usdToInr(coinPrice?.p); // Convert coinPrice from USDT to INR
    const estimatedReturn = (investingAmount * coinPriceInINR) / 87; // Calculate estimated return
    setEstimatedReturn(parseFloat(estimatedReturn).toFixed(2)); // Round off estimated return to 2 decimal places and set it in state
  }, [coinPrice, investingAmount]);
  // const { coinPrice } = useCoin();
  console.log("render from tade form pagee component.........");
  return (
    <FormContainer className="form-container">
      <div className="token-icon">
        <img
          src={`https://cryptoicons.org/api/color/${String(
            selectedCoin
          ).toLowerCase()}/600`}
          alt="colin"
        />
      </div>
      <div className="inner">
        {/* token */}

        <SlectToken
          onClick={() => {
            setShowModal(true);
          }}
        />
        <Spacer />
        <Input
          label="Amount you want to invest in INR"
          placeHolder="0.00"
          rightValue="INR"
          value={investingAmount}
          onChange={(e) => onChangeHandler(e)}
        />
        <Spacer />
        <Input
          label={`Estimate Number of ${selectedCoin} You will Get`}
          disabled
          placeHolder="0.00"
          value={estimatedReturn}
        />

        <Spacer />
        <Button text="Buy" variant="large" />
      </div>

      {showModal && (
        <Modal onClose={handleModalClose}>
          <SearchCoins modal={setShowModal} />
        </Modal>
      )}
    </FormContainer>
  );
};
