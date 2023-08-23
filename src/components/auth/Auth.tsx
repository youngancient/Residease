import {
  FormContainerStyle,
  FormLinkStyle,
  FormStyle,
} from "@/styles/ComponentStyles/AuthStyles/AuthStyles";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { CheckBox } from "../Icons/DashboardIcons";

export const LoginForm: FunctionComponent = () => {
  const [isRemembered, setIsRemembered] = useState<boolean>(false);
  return (
    <FormContainerStyle>
      <FormStyle>
        <form>
          <div className="head">
            <h3>Sign In</h3>
            <p>Please enter your details.</p>
          </div>
          <div className="form">
            <div className="form-ele">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" />
            </div>
            <div className="form-ele">
              <label htmlFor="pwd">Password</label>
              <input type="password" name="pwd" />
            </div>
          </div>
          <div className="below">
            <div className="one">
              <div className="remember">
                <CheckBox
                  isSelected={isRemembered}
                  handleClick={() => setIsRemembered(!isRemembered)}
                />
                <p>Remember me</p>
              </div>
              <Link href="#">
                <FormLinkStyle>Forgot password?</FormLinkStyle>
              </Link>
            </div>
            <div className="button">
              <button type="submit">Sign in</button>
            </div>
            <div className="last">
              <span>Don’t have an account? </span>
              <Link href="/auth/signup">
                <FormLinkStyle>Sign Up</FormLinkStyle>
              </Link>
            </div>
          </div>
        </form>
      </FormStyle>
    </FormContainerStyle>
  );
};

export const SignupForm: FunctionComponent = () => {
  return (
    <FormContainerStyle>
      <FormStyle>
      <form>
          <div className="head">
            <h3>Sign Up</h3>
            <p>Please provide details.</p>
          </div>
          <div className="form">
            <div className="form-ele">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" />
            </div>
            <div className="form-ele">
              <label htmlFor="pwd">Password</label>
              <input type="password" name="pwd" placeholder="" />
            </div>
            <div className="form-ele">
              <label htmlFor="pwd">Repeat Password</label>
              <input type="password" name="pwd2" />
            </div>
          </div>
          <div className="below">
            <div className="button">
              <button type="submit">Sign in</button>
            </div>
            <div className="last">
              <span>Already have an account?</span>
              <Link href="/auth/">
                <FormLinkStyle>Sign In</FormLinkStyle>
              </Link>
            </div>
          </div>
        </form>
      </FormStyle>
    </FormContainerStyle>
  );
};
