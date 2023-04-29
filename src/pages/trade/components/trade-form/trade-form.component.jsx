import { Button, Input } from "../../../../components";
import { SlectToken } from "../select-token/select-token";
import { FormContainer, Spacer } from "./trade-form.styles";

export const TradeForm = () => {
  return (
    <FormContainer className="form-container">
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
