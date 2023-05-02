import { useState } from "react";
import { Button, Input, Modal, Spacer } from "../../../../components";
import { SlectToken } from "../select-token/select-token";
import { SearchCoins } from "../search-coins/search-coins.component";
import { FormContainer } from "./trade-form.styles";
import { useCoin } from "../../../../context";

export const TradeForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const { coinPrice, setCoinPrice } = useCoin();

  console.log("test", coinPrice);
  return (
    <FormContainer className="form-container">
      <div className="token-icon">
        <img src="https://cryptoicons.org/api/color/bnb/600" alt="colin" />
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
          label="Amount you want to invest"
          placeHolder="0.00"
          rightValue="INR"
        />
        <Spacer />
        <Input
          label="Estimate Number of ETH You will Get"
          disabled
          placeHolder="0.00"
          value="2557"
        />

        <Spacer />
        <Button text="Buy" variant="large" onClick={() => alert(":")} />
      </div>

      {showModal && (
        <Modal title="Example Modal" onClose={handleModalClose}>
          <SearchCoins />
        </Modal>
      )}
    </FormContainer>
  );
};
