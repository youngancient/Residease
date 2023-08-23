import {
  CardStuff,
  CreditCard,
  GreaterThan,
  Wallet,
} from "@/components/Icons/DashboardIcons";
import { OrdinaryLogoIcon } from "@/components/Icons/HeaderIcons";
import { dataSelector } from "@/redux/dataSlice";
import { useAppSelector } from "@/redux/hooks/hook";
import { FormContainerStyle } from "@/styles/ComponentStyles/AuthStyles/AuthStyles";
import {
  InspectionPassStyles,
  PaymentFormStyles,
  PaymentOptionsStyles,
} from "@/styles/ComponentStyles/Dashboard/Payments/Main";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useEffect } from "react";
import { PaystackProps } from "react-paystack/dist/types";
import { userSelector } from "@/redux/userSlice";
import { ComingSoonShort } from "@/components/Homepage/ComingSoon";

type referenceObj = {
  message: string;
  reference: string;
  status: "sucess" | "failure";
  trans: string;
  transaction: string;
  trxref: string;
};

export const PaymentForm = () => {
  const { user } = useAppSelector(userSelector);
  const router = useRouter();
  const id = router.query.id as string;
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_TEST_KEY as string;
  const amount = 1000000;
  const [email, setEmail] = useState<string>("Jude@gmail.com");
  const name = "Jude";
  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay with Paystack",
    onSuccess: ({ reference }: referenceObj) => {
      console.log(`Your purchase was successful! Transaction reference: ${reference}`);
      // redirect to a page
      
    },
    onClose: () => alert("Our Escrow system is solely for your benefit!"),
  };
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
          <div className="fl">
            <InspectionPass id={id} />

            <p>
              Our Inspection Pass is free, But you need to instantiate an Escrow
              so we know you mean business!
            </p>
          </div>
          <div className="btn-cont">
            {/* <PaystackButton
              publicKey={process.env.PAYSTACK_PUBLIC_TEST_KEY as string}
              email="judetochyokoy@gmail.com"
              amount={100000}
              text=""
            /> */}
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
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
  const [showComingsoon, toggleShowComingSoon] = useState(false);

  return (
    <PaymentOptionsStyles onClick={() => toggleShowComingSoon(!showComingsoon)}>
      <div className="pair">
        {icon}
        <div className="flex">
          <p>{name}</p>
          <span>{secret}</span>
        </div>
        {showComingsoon && (
          <div className="hide">
            <ComingSoonShort>Coming Soon</ComingSoonShort>
          </div>
        )}
      </div>
      <div className="enlarge">
        <GreaterThan />
      </div>
    </PaymentOptionsStyles>
  );
};

interface InspectionType {
  id: string;
}
export const InspectionPass: FunctionComponent<InspectionType> = ({ id }) => {
  const { allHouses } = useAppSelector(dataSelector);
  const now: Date = new Date();
  return (
    <InspectionPassStyles>
      <div className="xx">
        <div className="i-one">
          <h4>Inspection Pass</h4>
          <div className="name">
            {allHouses?.find((ele) => ele.id === id)?.name}
          </div>
          <span>{now.toDateString()}</span>
        </div>
        <h4>TC-426784</h4>
      </div>
      <div className="abs">
        <CardStuff />
      </div>
    </InspectionPassStyles>
  );
};
