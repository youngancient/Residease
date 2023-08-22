import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: flex-start; /* Align content to the left */
  height: 100vh;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  text-align: left; /* Align form content to the left */

  div {
    gap: 10px;
  }

  label {
    flex: 1;
  }

  input {
    display: flex;
    width: 398px;
    height: 48px;
    padding: 10px 10px 10px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 15px;
    border: 1px solid #000;
    background-color: transparent;
    margin-top: 6px;
  }
  h1 {
    color: #fff;
    text-align: center;
    font-family: Eudoxus Sans;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 54.6px */
    letter-spacing: 0.84px;
  }

  p {
    color: var(--white, #fff);
    font-family: Eudoxus Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
  }

  button {
    display: flex;
    width: 230px;
    height: 64px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 15px;
    color:#fff;
    background: var(--primary-color, #000);
    margin:0 auto;
  }

  @media (max-width: 968px) {
    width:200px;

    input{
        width:300px;
    }

    h1{
        font-size: 30px;
    }
  }
  @media (max-width: 390px) {
    width:200px;
    
    input{
        width:200px;
    }

    h1{
        font-size: 25px;
    }
  }
`;

const Login = () => {
  return (
    <Container>
      <Form>
        <h1>Make an Enquiry</h1>
        <p>
          Save your time and easily rent or sell your property with the lowest
          commission on the real estate market.
        </p>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="age">Email:</label>
          <input type="email" id="age" />
        </div>
        <div>
          <label htmlFor="email">Phone Number:</label>
          <input type="number" id="email" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

export default Login;
