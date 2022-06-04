import React, { useState } from 'react';
import { Container, Info, InfoText, TitleContainer, Arrow, FormBody, Name, Photo, Button } from './styles';
import { useNavigate } from 'react-router-dom';

// go-back-arrow image

import arrow from '../../assets/icons/go-back-arrow.png';



//---------------- Form -------------------//

const Form = () => {

  const [ name, setName ] = useState('');
  const [ picture, setPicture ] = useState();
  

  let navigate = useNavigate();

  // this function will store the picture to a state
  // variable to pass it to the next page

  const pictureHandler = (event) => {

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('loadend', () => setPicture(reader.result));
    reader.readAsDataURL(file);

  }

  // this function will pass the picture value
  // the localStorage in order for us
  // to retrieve it later

  const formSubmit = (event) => {
    
    event.preventDefault();
    
    localStorage.setItem('picture', picture);

    console.log(localStorage.getItem('picture'));
    console.log(typeof picture);

    // form validation

    if (picture && name) return navigate(`/invite/${name}`);

    return alert('Preencha todos os campos');

  }


  return (

    <FormBody htmlFor='' >

      <Name 
        type='text'
        placeholder='Seu primeiro e último nome' 
        required={true}
        value={name}
        onChange={(event) => {

          let value = event.target.value;
          setName(value);

          console.log(name);

        }}
      />

      <Photo htmlFor='file' >Adicione uma foto sua</Photo>

      <input 
        type='file' 
        name='file' 
        id='file'
        style={{display: 'none'}}
        accept='image/*'
        onChange={(event) => pictureHandler(event)}
      />

      <Button onClick={formSubmit}>Gerar Convite</Button>

    </FormBody>

  );

}

//--------------------------------------------//


export default function InfoPage() {

  let navigate = useNavigate();

  return(

    <Container>

      <Arrow onClick={() => navigate(-1)}>
        
        <img src={arrow} alt='seta de navegação traseira' width='40px' />

      </Arrow>

      <TitleContainer>

        <h1 style={{textAlign: 'center'}}>ESTÁ CORDIALMENTE <br/> CONVIDADO</h1>

      </TitleContainer>

      <Info>

        <InfoText>

          <p>
        
            Recentemente me graduei do médio e em comemoração a isso daremos uma pequena festinha.

          </p>

          <br />

          <p>

            Este é um momento muito especial para mim e por isso gostaria de compartilha-lo com os meus familiares e amigos.

          </p>

          <br />

          <p>
          
            Se recebeu isso, saiba que está mais do que convidado à comparecer a esta humilde ocasião que se dará aos <span style={{color: '#6358B6'}}>19 de Junho</span> as 13h00 na Centralidade do Kilamba, U10, aptm. 24.

          </p>

          <br />

          <p>

            Caso tenha interesse, por favor preencha o formulário abaixo com as informações necessárias.

          </p>

          <br />

          <p>  

            Não se esqueça de fazer uma captura de tela do convite que aparecerá na próxima página.

          </p>

        </InfoText>

        <Form />

      </Info>

    </Container>
  );

}
