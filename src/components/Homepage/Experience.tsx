import {
  BlackOverlay,
  Container,
  Grid,
  GridContainer,
  GridItem,
  TextGrid,
  FlexContainer,
  LoginGrid,
} from "@/styles/ComponentStyles/ExperienceStyle";
import Clock from "../../../public/icon-clock.png";
import insight from "../../../public/icon-insight.png";
import person from "../../../public/icon-person.png";
import stress from "../../../public/icon-stressfree.png";
import Logo from "../../../public/logo.png";
import Svg from "../../../public/Group 853.png";
import Image from "next/image";
import Login from "../Form/login";
const Experience = () => {
  return (
    <>
      <Container>
        <h1>Transforming the Rental Experience for Good</h1>
        <Grid>
          <div className="grid">
            <div className="logo">
              <Image
                src={Clock}
                alt="logo"
                id="logo"
                //  width={100}
                //  layout="responsive"
              />
            </div>

            <h2>Hassle Free</h2>
            <p>
              We offer features like automate rent payments, <br /> maintenance
              requests, background checks <br /> and tenant rating systems - all
              designed to save time, <br /> reduce paperwork and resolve issues
              quickly.
            </p>
          </div>
          <div className="grid">
            <Image
              src={insight}
              alt="logo"
              id="logo"
              //  width={100}
              //  layout="responsive"
            />
            <h2>Hassle Free</h2>
            <p>
              We offer features like automate rent payments, maintenance
              requests, background checks and tenant rating systems - all
              designed to save time, reduce paperwork and resolve issues
              quickly.
            </p>
          </div>
          <div className="grid">
            <Image
              src={person}
              alt="logo"
              id="logo"
              //  width={100}
              //  layout="responsive"
            />
            <h2>Hassle Free</h2>
            <p>
              We offer features like automate rent payments, maintenance
              requests, background checks and tenant rating systems - all
              designed to save time, reduce paperwork and resolve issues
              quickly.
            </p>
          </div>
          <div className="centered grid ">
            <Image
              src={stress}
              alt="logo"
              id="logo"
              //  width={100}
              //  layout="responsive"
            />
            <h2>Hassle Free</h2>
            <p>
              Streamlined rental process from inspection to moving in, <br/> to making
              payment, and landlord communication <br/> all in one encompassing
              platform.
            </p>
          </div>
        </Grid>
      </Container>

      <GridContainer>
        <GridItem id="left">
          <h4>WONDERING WHO WE ARE?</h4>
          <h1>We are Readisy</h1>
          <p>
            Yes! you heard right Readiease is a platform that finds the best
            suitable home stress free with a click. We make you smile! Entrust
            your smile to us.We are a kinikan kinikan of 5 teams solving a major
            problem in the Nigeria Eco-system of bla bla bla bla. Yes! you heard
            right Readiease is a platform that finds the best suitable home
            stress free with a click. We make you smile! Entrust your smile to
            us.We are a kinikan kinikan of 5 teams solving a major problem in
            the Nigeria Eco-system of bla bla bla bla
          </p>
        </GridItem>
        <GridItem id="right">
          <BlackOverlay>
            <Image
              src={Logo}
              alt="logo"
              id="logo"
              //  width={100}
              //  layout="responsive"
            />
            <ul>
              <li>
                <Image
                  src={Svg}
                  alt="logo"
                  id="logo"
                  //  width={100}
                  //  layout="responsive"
                />
                <span>Save Time!</span>
              </li>
              <li>
                <Image
                  src={Svg}
                  alt="logo"
                  id="logo"
                  //  width={100}
                  //  layout="responsive"
                />
                <span>Stress-free renting</span>
              </li>
              <li>
                <Image
                  src={Svg}
                  alt="logo"
                  id="logo"
                  //  width={100}
                  //  layout="responsive"
                />
                <span>Personalised process</span>
              </li>
            </ul>
          </BlackOverlay>
        </GridItem>
      </GridContainer>

      <FlexContainer>
        <TextGrid>
          <h1>We are Readisy</h1>
          <p>
            Yes! you heard right Readiease is a platform that finds the best
            suitable home stress free with a click. We make you smile! Entrust
            your smile to us.
          </p>
        </TextGrid>
        <LoginGrid>
          <Login />
        </LoginGrid>
      </FlexContainer>
    </>
  );
};

export default Experience;
