import { useState } from "react";
import { Button, Input, Modal } from "../../../../components";
import { SlectToken } from "../select-token/select-token";
import { FormContainer, Spacer } from "./trade-form.styles";

export const TradeForm = () => {
  return (
    <FormContainer className="form-container">
      <div className="token-icon">
        <img
          src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/eth.svg"
          alt="colin"
        />
      </div>
      <div className="inner">
        {/* token */}

        <SlectToken />
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
    </FormContainer>
  );
};
