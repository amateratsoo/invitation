import styled from "styled-components";

export const Container = styled.main `
  background-color: #FFCD38;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 14%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  // responsiveness for medium devices (laptops)

  @media (max-width: 1300px) {

    gap: 6%;

  };

  @media (min-width: 1024px) and (orientation: portrait) {

    justify-content: center;

  }

  // responsiveness for small devices (phones)

  @media (max-width: 430px) {

    position: relative;
    justify-content: center;

  };

  // responsiveness to medium-small devices (tablets)

  @media (min-width: 425px) and (max-width: 920px) {

    position: relative;
    justify-content: center;

  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20%;
  margin-top: -5%;

  // responsiveness for small devices (phones) 

  @media (max-width: 424px) {

    z-index: 2;
    gap: 50%;

  };

  @media (min-width: 1024px) and (orientation: portrait) {

    gap: 42%;

  }

  // responsiveness to medium-small devices (tablets)

  @media (min-width: 425px) and (max-width: 920px) {

    gap: 40%;

  }
`;

export const Greetings = styled.img`
  max-width: 70%;
  max-height: 60%;
  transform: rotate(-26deg);
  margin-left: -12%;
  margin-top: 8%;

  // responsiveness for medium devices (laptops)

  @media (max-width: 1262px) {

    margin-left: -17%;

  };

  // responsiveness for small devices (phones)

  @media (max-width: 424px) {

    position: absolute;
    max-width: 90%;
    max-height: 80%;
    left: 0;
    top: 30%;
    transform: translateY(-30%);
    transform: rotate(-26deg);

  };

  @media (min-width: 1024px) and (orientation: portrait) {

    position: absolute;
    left: 0;
    top: 30%;
    transform: translateY(-30%);
    transform: rotate(-26deg);

  }

  // responsiveness to medium-small devices (tablets)

  @media (min-width: 425px) and (max-width: 920px) {

    position: absolute;
    left: 0;
    top: 30%;
    transform: translateY(-30%);
    transform: rotate(-26deg);

  }
`;

export const Title = styled.h1`
  color: #6358B6;
  font-size: 3rem;
  text-align: center; 

  // resposiveness for big tablets

  @media (min-width: 870px) and (max-width: 1048px) and (orientation: portrait) {

    font-size: 4rem;

  } 

  // resposiveness for medium tablets

  @media (width: 540px) and (orientation: portrait) {

    font-size: 2.6rem;

  }

  // responsiveness for small devices (phones)

  @media (max-width: 424px) {

    font-size: 2.3rem;
    font-weight: 900;

  };

  // very small devices like those old iphones

  @media (max-width: 380px) {

    font-size: 1.9rem;

  } 
`;

export const Button = styled.button`
  background-color: #363062;
  height: 3.4rem;
  width: 14rem;
  border: none;
  border-radius: .5rem;
  color: #f5f5f5;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  gap: 2.2rem;

  // responsiveness for big tablets

  @media (min-width: 870px) and (max-width: 1040px) and (orientation: portrait) {

    width: 18rem;
    height: 5.4rem;
    font-size: 1.5rem;
    padding-right: 1.3rem;

  }

  // resposiveness for medium tablets

  @media (min-width: 540px) and (max-height: 730px) and (orientation: portrait) {

    width: 12rem;
    gap: 2rem;

  }

  // responsiveness for small devices (phones) 

  @media (max-width: 424px) {

    width: 14rem;
    height: 4rem;
    font-size: 1rem;
    gap: 1.8rem;
    padding-right: 20px;
    justify-content: flex-end;

  };

  // responsiveness to medium-small devices (tablets)

  @media (min-width: 425px) and (max-width: 880px) {

    width: 15rem;
    height: 4.3rem;
    font-size: 1.2rem;

  }
`;

export const Arrow = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media (min-width: 880px) and (max-width: 1040px) {

    width: 2rem;
    height: 2rem;

  }
`;
