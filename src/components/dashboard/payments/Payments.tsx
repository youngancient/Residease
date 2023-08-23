import {
  CreditCard,
  GreaterThan,
  Wallet,
} from "@/components/Icons/DashboardIcons";
import { OrdinaryLogoIcon } from "@/components/Icons/HeaderIcons";
import { FormContainerStyle } from "@/styles/ComponentStyles/AuthStyles/AuthStyles";
import {
    InspectionPassStyles,
  PaymentFormStyles,
  PaymentOptionsStyles,
} from "@/styles/ComponentStyles/Dashboard/Payments/Main";
import { FunctionComponent, ReactNode, useState } from "react";

export const PaymentForm = () => {
  return (
    <FormContainerStyle>
      <PaymentFormStyles>
        <div className="one">
          <OrdinaryLogoIcon />
          <h4>Escrow</h4>
        </div>
        <div className="two">
          <PaymentOption
            name="Wallet"
            secret="1,20XXXXXXX"
            icon={<Wallet />}
            clickAction={() => console.log("do something")}
          />
          <PaymentOption
            name="Credit Card"
            secret="5863 424X XXXX"
            icon={<CreditCard />}
            clickAction={() => console.log("do something")}
          />
        </div>
        <div className="three">
        <InspectionPass />
        <div>Paystack button</div>
        </div>
      </PaymentFormStyles>
    </FormContainerStyle>
  );
};

interface IPaymentOption {
  name: string;
  icon: ReactNode;
  clickAction: () => void;
  secret: string;
}
export const PaymentOption: FunctionComponent<IPaymentOption> = ({
  name,
  icon,
  clickAction,
  secret,
}) => {
  return (
    <PaymentOptionsStyles onClick={clickAction}>
      <div className="pair">
        {icon}
        <div className="flex">
          <p>{name}</p>
          <span>{secret}</span>
        </div>
      </div>
      <div className="enlarge">
        <GreaterThan />
      </div>
    </PaymentOptionsStyles>
  );
};


export const InspectionPass =()=>{
    return(
        <InspectionPassStyles>
            <div className="i-one">
                <h4>Inspection Pass</h4>
                <p>Boston Family Home</p>
                <span>2nd October 2023</span>
            </div>
            <h4>TC-426784</h4>
        </InspectionPassStyles>
    )
}