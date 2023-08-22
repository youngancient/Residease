import styled from "styled-components";
export const Container = styled.div`
  max-width: 100%;
  // padding: 0 20px;
  padding: 4rem 4rem;
  margin: 40px 50px;
  background: #f2960d;
  height: auto;
  // overflow:auto;
  border-radius: 48px;
  h1 {
    font-family: Eudoxus Sans;
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    letter-spacing: 0.84px;
    padding: 50px 20px;
  }

  // p{
  //   width:50%;
  // }
  .grid {
    text-align: center;
    background-color: transparent;
    padding: 10px;
    border-radius: 8px;
    // width: 400px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    // padding: 10px;
    // padding-left: 5px;
    width:21.5rem;
    margin-left:1rem;

    h1 {
      font-size: 30px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(3, 1fr); /* Default to 3 items in a row */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on smaller screens */
  }

  .centered {
    grid-column: span 3; /* Full width by default */

    @media (max-width: 768px) {
      grid-column: span 1; /* 1 column on smaller screens */
    }
  }

  #logo {
    // display:none;
    width: 50px;
    max-width: 100%;
    height: 50px;
  }

  .grid p {
    color: #fff;
  }
  .grid h2 {
    font-weight: bold;
  }
`;

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 2fr; /* Left grid takes 1 part, right grid takes 2 parts */
gap: 20px; /* Adjust the gap as needed */
margin: 6rem; /* Adjust the margin as needed */

@media (max-width: 768px) {
  grid-template-columns: 1fr; /* On smaller screens, use a single column layout */
}

@media (max-width: 390px) {
  grid-template-columns: 1fr; 
  margin:-0px;
}
  #left {
    padding: 30px;

    h4 {
      font-family: Eudoxus Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 170%; /* 30.6px */
      letter-spacing: -0.36px;
    }

    h1 {
      font-family: Eudoxus Sans;
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 70.2px */
      letter-spacing: 1.08px;
    }

    p {
      font-family: Eudoxus Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 170%; /* 27.2px */
      letter-spacing: -0.32px;
      width: 510px;
    }

    @media (max-width: 968px) {
    h4{
      font-size:15px;
      width:250px;
    }

    h1{
      width:350px;
      font-size: 40px;
    }

    p{
      width:350px;

    }
    
  }

  @media (max-width: 390px) {
    h4{
      font-size:15px;
      width:250px;
    }

    h1{
      width:350px;
      font-size: 40px;
    }

    p{
      width:300px;

    }
    
  }

  #right {
    // width: 50px;   
    border: 1px solid black;
    border-radius: 20px;

    @media (max-width: 768px) {
    // height: 500px;
    }
  }
`;

export const GridItem = styled.div`
  position: relative;
  background-color: #fff; /* White background for the grid */
  padding: 20px;
  box-sizing: border-box;
  gap: 50px @media (max-width: 768px) {
    width: 200px;
  }
`;

export const BlackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0px; /* Adjust the negative left value to cover the left side */
  bottom: 20px; /* Adjust the negative bottom value to cover the bottom */
  right: 20px;
  background-color: black; /* Black background for the overlay */
  color: #fff;
  border-radius: 20px;
  //  width:1000px;
  max-width: 50%;
  margin-left: 600px;
  padding: 30px;

  ul {
    // padding:30px;
    display: flex;
    flex-direction: column;
  }

  li {
    list-style: none;
    padding: 30px;
    display: flex;
    gap: 20px;
  }

  @media (max-width: 968px) {
    position: relative;
    height: 100%;
    margin-left: -0px;
    width: 650px;
  }

  
  @media (max-width: 390px) {
    position: relative;
    height: 100%;
    margin-left: -0px;
    width: 650px;
  }
`;

export const FlexContainer = styled.div`
display: flex;
flex-direction:row;
// gap: 30px;
background-image:url('/hero.png');
background-size: cover;
background-position: center;
// height:50rem;
padding-right: 270px;
padding-bottom:90px;
margin:30px;
border-radius:20px;

@media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    // padding:40px;
    
}

@media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
    width:21rem;
    
}
`;

export const TextGrid = styled.div`
  // background-color: rgba(255, 255, 255, 0.8); /* White background with transparency */
  padding: 230px;
  box-sizing: border-box;

  h1 {
    font-family: Eudoxus Sans;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 70.2px */
    letter-spacing: 1.08px;
  }

  p {
    font-family: Eudoxus Sans;
    font-size: 25px;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
  }

  @media (max-width: 968px) {
    padding: 50px;

    h1 {
      font-size: 34px;
      width: 2000px;
    }

    p {
      font-size: 25px;
      width: 350px;
    }
  }

  @media (max-width: 390px) {
    padding: 50px;

    h1 {
      font-size: 34px;
      width: 2000px;
    }

    p {
      font-size: 25px;
      width: 250px;
    }
  }
`;

export const LoginGrid = styled.div`
  width: 493px;
  height: 629px;
  flex-shrink: 0;
  padding: 60px;
  // padding-top:90px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(50px);
  margin-top: 40px;

  @media (max-width: 968px) {
    // padding:50px;
    width: 390px;
    margin-left: 20px;
  }

  @media (max-width: 390px) {
    // padding:50px;
    width: 19rem;
    margin-left: 20px;
  }
`;
