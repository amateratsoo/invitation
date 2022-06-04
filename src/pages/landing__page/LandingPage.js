import React from 'react';
import { Container, Greetings, Title, InfoDiv, Button } from './styles';
import { useNavigate } from 'react-router-dom';

// just find out that i need
// to import the image that will
// show in the page.
// ngl, react is a bit weird lol

import greetingsImg from '../../assets/imgs/tá-tranquilo.png';
import arrow from '../../assets/icons/arrow.png';

export default function LandingPage() {

  let navigate = useNavigate();

  return (

    <Container>
      <Greetings src={greetingsImg} alt='imagem de boas-vindas' />

      <InfoDiv>

        <Title>ESTÁ CORDIALMENTE <br /> CONVIDADO</Title>
        
        <Button onClick={() => navigate('/info')}>SAIBA MAIS <img src={arrow} alt ='arrow' width='20px' height='20px' /></Button>

      </InfoDiv>
    </Container>

  );

}
