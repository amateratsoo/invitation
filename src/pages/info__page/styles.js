import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  // set the query for big tablets

  @media (min-width: 1000px) and (orientation: portrait) {

    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 140vh;

  }

  // set flex direction to column when the user's 
  // on a mobile device

  @media (max-width: 920px) and (orientation: portrait) {

    flex-direction: column;
    overflow-y: scroll;

  }

  // responsiveness for tablets

  @media (min-width: 800px) and (max-width: 830px) {

    height: 160vh;

  }

  @media (min-width: 700px) and (max-width: 799px) {

    height: 175vh;
    
  }

  // responsiveness for top tier phones

  @media (max-width: 430px) {

    height: 215vh;

  }

  // responsiveness for iphone 6/7/8 plus

  @media (width: 414px) and (height: 736px) {

    height: 245vh;

  }

  // responsiveness for small devices (phones)

  @media (max-width: 400px) {

    height: 225vh

  }

  // responsiveness for very small devices
  // (small phones like the iphone 8)

  @media (max-width: 380px) {

    height: 294vh;
    
  }

  // responsiveness for iphone x

  @media (width: 375px) and (height: 812px) {

    height: 255vh;

  }

  @media (max-width: 360px) {

    height: 266vh;

  }

  // responsiveness for galaxy J3/J5/J7/A7 and 
  // similar devices (360 x 640)

  @media (max-width: 360px) and (max-height: 640px) {

    height: 295vh;

  }

  // responsiveness for iphone 5 and smaller devices

  @media (max-width: 320px) {

    height: 305vh;

  }
`;

// side info page

export const Info = styled.div`
  height: 100vh;
  width: 70%;
  // padding-top: 3%;
  background-color: #1E1C1C;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {

    display: none;

  };

  // set the query for big tablets

  @media (min-width: 1000px) and (orientation: portrait) {

    width: 100%;
    overflow: hidden;
    position: relative;
    height: 90vh;

  }

  // set flex direction to column when the user's 
  // on a mobile device

  @media (max-width: 920px) and (orientation: portrait) {

    width: 100%;
    overflow: hidden;

  }

  @media (max-width: 831px) and (orientation: portrait) {

    position: relative;

  }

  // responsiveness for tablets

  @media (min-width: 800px) and (max-width: 830px) {

    height: 100vh;

  }

  @media (min-width: 700px) and (max-width: 799px) {

    height: 115vh;

  }

  // responsiveness for top tier phones

  @media (max-width: 430px) {

    height: 175vh;

  }

  // responsiveness for iphone 6/7/8 plus

  @media (width: 414px) and (height: 736px) {

    height: 120vh;

  }

  // responsiveness for small devices (phones)

  @media (max-width: 400px) {

    height: 185vh;

  }

  // responsiveness for very small devices
  // (small phones like the iphone 8)

  @media (max-width: 380px) {

    height: 240vh;
    
  }

  // responsiveness for iphone x

  @media (width: 375px) and (height: 812px) {

    height: 196vh;

  }

  @media (max-width: 360px) {

    height: 215vh;

  }

  // responsiveness for galaxy J3/J5/J7/A7 and 
  // similar devices (360 x 640)

  @media (max-width: 360px) and (max-height: 640px) {

    height: 245vh;

  }

  // responsiveness for iphone 5 and smaller devices

  @media (max-width: 320px) {

    height: 280vh;

  }
`;

export const InfoText = styled.div`
  color: #f5f5f5;
  font-size: 22px;
  text-align: justify;
  text-justify: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: normal !important;
  height: 77.9vh;
  margin: 20%;
  // use this to center the text on wide screens
  margin-top: 51%;

  //---------------------------------------------//


  // set the resposiveness for general desktops

  @media (max-width: 1024px) and (orientation: landscape) {

    margin-bottom: 35%;
    margin-top: 123%;

  }

  // set the query for big tablets

  @media (min-width: 1000px) and (orientation: portrait) {

    margin-top: -12rem;

  }

  // responsiveness for tablets

  @media (min-width: 700px) and (max-width: 830px) {

    margin-top: -12rem;

  }

  // responsiveness for top tier phones

  @media (max-width: 430px) {

    margin-top: -13.5rem;
    text-align: left;

  }

  // responsiveness for small devices (phones)

  @media (max-width: 400px) {

    margin-top: -13rem;
    text-align: left;

  }

  // responsiveness for very small devices
  // (small phones like the iphone 8)

  @media (max-width: 380px) {

   margin-top: -10.5rem;
   text-align: left;
    
  }

  // responsiveness for iphone x

  @media (width: 375px) and (height: 812px) {

    margin-top: -14rem;

  }

  @media (max-width: 360px) {

    margin-top: -12rem;

  }

  // responsiveness for iphone 5 and smaller devices

  @media (max-width: 320px) {

    font-size: 20px;

  }
`;

// side page with the title

export const TitleContainer = styled.div`
  height: 100vh;
  width: 50%;
  background-color: #ffcd38;
  display: grid;
  place-items: center;
  color: #6358B6;
  font-size: 1.4rem;
  overflow: hidden;

  // set the query for big tablets

  @media (min-width: 1000px) and (orientation: portrait) {

    width: 100%;
    height: 50vh;

  }

  // set flex direction to column when the user's 
  // on a mobile device

  @media (max-width: 920px) and (orientation: portrait) {

    width: 100%

  }

  // responsiveness for tablets

  @media (min-width: 700px) and (max-width: 830px) {

    height: 60vh;

  }

  @media (max-width: 430px) {

    height: 43vh;

  }

  // responsiveness for small devices (phones)

  @media (max-width: 400px) {

    height: 40vh;

  }

  // responsiveness for very small devices
  // (small phones like the iphone 8)

  @media (max-width: 380px) {

   height: 55vh;
    
  }

  // responsiveness for iphone 5 and smaller devices

  @media (max-width: 320px) {

    font-size: .9rem;

  }
`;


//-------------- styles for the form pages -----------------//


export const FormBody = styled.form`
  background-color: #6358B6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 0;

  // set the query for big tablets

  @media (min-width: 1000px) and (orientation: portrait) {

    position: absolute;
    bottom: 0;

  }

  // medias for small devices

  @media (max-width: 821px) and (orientation: portrait) {

    position: absolute;
    bottom: 0;

  }
`;

export const Name = styled.input`
  width: 69%;
  height: 5vh;
  background-color: #f5f5f5;
  border: none;
  border-radius: .5rem;
  margin-top: 3rem;
  padding-left: .7rem;

  &:focus {

    outline: none;
    border: 2px solid #4C3575;

  }
`;

export const Photo = styled.label`
  width: 70%;
  height: 7vh;
  background-color: #4C3575;
  border: none;
  border-radius: .5rem;
  margin-top: 1.4rem;
  display: grid;
  place-items: center;
  font-weight: 500;
  color: #f5f5f5;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 70%;
  height: 7vh;
  background-color: #4C3575;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  display: grid;
  place-items: center;
  margin: 1.4rem 0 2rem 0;
  font-weight: 400;
  color: #f5f5f5;
  cursor: pointer;
`;

// navigation arrow

export const Arrow = styled.button`
  position: fixed;
  top: 1.8rem;
  left: 0;
  margin-left: 2rem;
  background-color: transparent;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;

  // responsiveness for very small devices
  // (small phones like the iphone 8)

  @media (max-width: 400px) {

   margin-left: 1rem;
    
  }
`;
