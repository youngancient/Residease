import { styled } from "styled-components";
import { DarkContainerStyle } from "../../AuthStyles/AuthStyles";
import { formVariants } from "@/animations/dashboard";
import { motion } from "framer-motion";

export const PaymentBg = styled(DarkContainerStyle)`
  border: 2px solid #fff;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const PaymentFormStyles = styled(motion.div).attrs(() => ({
  variants: formVariants,
  initial: "initial",
  animate: "final",
  exit: "exit",
}))`
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.65rem;
  }
  .one h4 {
    color: var(--gray-800, #242d35);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 2.25rem */
    margin-top: 0.2rem;
  }
  .two {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const PaymentOptionsStyles = styled.div`
  border: 2px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid var(--gray-200, #eaecee);
  padding: 1rem;
  background: var(--base-background-white, #fff);
  .pair {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  .flex {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .enlarge svg {
    scale: 1.1;
  }
`;

export const InspectionPassStyles = styled.div`
  border: 2px solid #000;
  height :180px;
`;
