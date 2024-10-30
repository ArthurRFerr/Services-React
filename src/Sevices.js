import React from 'react'
import styled from 'styled-components'
import { Leaf, BookOpenText } from 'lucide-react';


const Container = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
` 


const ServiceContainer = styled.div`
  text-align: center;
  margin: auto;
  justify-content: space-between; 
  margin-top: 30px;
  gap: 1rem;
  display: flex;
  flex-direction: row;
`

const ServicesCard = styled.div`
  width: 350px;
  border-radius: 8px;
  border: 0.5px solid #000;
  padding: 20px;
  margin:20px;
  text-align: center;
  cursor: pointer;
  background-color: yellow;

  transition: 0.5s ease;
  &:hover{
    transform: translateY(-20px);
  }
`

function Sevices() {
  return (
    <Container>
      <h1>Nossos Serviços</h1>
      <ServiceContainer>
        <ServicesCard>
          <BookOpenText size={50} />
          <h2>Portal de Conhecimento: Tudo sobre Energia Limpa e o ODS 7</h2>
          <p>Este portal oferece uma visão abrangente sobre o ODS 7, que busca garantir acesso universal à energia limpa e sustentável. Aqui, você entenderá a importância desse objetivo para promover um futuro mais saudável e combater as mudanças climáticas, fundamentais para todos.</p>
        </ServicesCard>
        <ServicesCard>
          <h2>SparkPost</h2>
          <p>Através de fóruns e discussões, nosso portal conecta pessoas em torno do ODS 7, promovendo a troca de conhecimentos e experiências. Juntos, podemos formar uma comunidade ativa e engajada na busca por soluções energéticas responsáveis e inovadoras.</p>
        </ServicesCard>
        <ServicesCard>
          <h2>Desenvolvimento de Software</h2>
          <p>Desenvolvemos soluções de software personalizadas para atender suas necessidades.</p>
        </ServicesCard>
        
      </ServiceContainer>
    </Container>
  )
}

export default Sevices
