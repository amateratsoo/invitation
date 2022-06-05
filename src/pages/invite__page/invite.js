import React, { useEffect, useState } from 'react';
import { Container, Image, Ignore, Main, Details, Picture, Name, Button } from './styles';
import { useParams } from 'react-router-dom';

// images

import image from '../../assets/imgs/tá-mec.png';
import arrow from '../../assets/icons/arrow.png';


export default function Invite() {

  const [ picture, setPicture ] = useState('');
  useEffect(() => {
    
    setTimeout(() => alert('Não se esqueça de fazer uma captura de seu convite'), 700);
    setPicture(localStorage.getItem('picture'))
  
  }, []);

  const { name } = useParams();


  // whatsapp information

  const number = 995382809;
  const message = `Eu, ${name}, confirmo a minha presença no dia 19 de Junho as 13h00, na Centralidade do Kilamba, U10, aptm. 24 🤝`;

  return (

    <Container>

      <Image src={image} alt='' />

      <Ignore />

      <Main>

        <Details>

          <Picture src={picture} alt='' />

          <Name>{name}</Name>
        
        </Details>

        <Button href={`https://wa.me/${number}?text=${message}`}>

          <p>Estarei presente</p> <img src={arrow} alt='' width='20' height='20' />
        
        </Button>

      </Main>

    </Container>

  );

}
