import styled from 'styled-components';


// yellow: ffcd38
// purple: 6358B6

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffcd38;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  @media (max-width: 1024px) and (orientation: portrait) {

    justify-content: center;

  }
`;

export const Image = styled.img`
  max-width: 70%;
  max-height: 70%;
  position: absolute;
  left: 0;
  top: 10%;
  transform: rotate(45deg);

  @media (max-width: 430px) and (orientation: portrait) {

    top: -4%;
    
  }
`;

export const Ignore = styled.span`
  height: 100%;
  width: 50%;

  @media (max-width: 1024px) and (orientation: portrait) {

    display: none;

  }
`;

export const Main = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 2;

  @media (max-width: 430px) and (orientation: portrait) {

    margin-top: 3rem;
    
  }
`;

export const Details = styled.div`
  height: 70%;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Picture = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: none;
  background-color: #d5d5d5;
  object-fit: cover;
`;

export const Name = styled.span`
  width: 22rem;
  text-align: center;
`;

export const Button = styled.a`
  background-color: #363062;
  border: none;
  border-radius: .5rem;
  height: 3.4rem;
  width: 14rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  gap: 1.7rem;
  font-size: 1rem;
  font-weight: 500;
  color: #f5f5f5;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
`;
