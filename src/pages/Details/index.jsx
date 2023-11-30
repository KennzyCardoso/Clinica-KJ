import React from 'react';
import { ContainerFirst, ContainerSecond, ContainerThree, ContainerFor } from './Styles';

export function Details() {
  return (
    <div>
      <ContainerFirst>
        <h2>OLÁ! SOU A DRA. JULIANA SILVA, <br/> MUITO PRAZER</h2>
        <p>APAIXONADA POR FISIOTERAPIA GERAL<br/>REABILITAÇÃO MUSCULAR<br/>TRATAMENTO DE LESÕES<br/>PILATES</p>
        <button onClick={() => window.location.href = 'https://wa.me/559183516196'}>Fale com a Doutora</button>
      </ContainerFirst>

      <ContainerSecond>
        <h2>Reabilitação Muscular: Caminho para o Bem-Estar</h2>
        <p>A reabilitação muscular é um processo personalizado e dedicado à restauração da função muscular, visando melhorar a qualidade de vida dos pacientes. A Dra. Juliana é especializada em utilizar abordagens inovadoras, combinando terapias manuais, exercícios específicos e tecnologia avançada para promover a cura e fortalecimento muscular.</p>
        <button onClick={() => window.location.href = 'https://wa.me/559183516196'}>Fale com a Doutora</button>
      </ContainerSecond>
      <ContainerThree>
        <h2>Tratamento de Lesões: Recuperação Personalizada para Sua Vitalidade</h2>
        <p>Na nossa clínica, entendemos que as lesões podem impactar profundamente a qualidade de vida. Oferecemos um tratamento dedicado e personalizado, guiando-o passo a passo em direção à recuperação completa. Nosso foco no tratamento de lesões vai além da simples cura; buscamos restaurar sua força, mobilidade e confiança.</p>
        <button onClick={() => window.location.href = 'https://wa.me/559183516196'}>Fale com a Doutora</button>
      </ContainerThree>
      <ContainerFor>
        <h2>Descubra o Pilates: Transforme Seu Corpo, Fortaleça Sua Mente</h2>
        <p>Bem-vindo à nossa jornada de Pilates, onde a transformação física e mental se entrelaçam para criar uma nova versão mais forte, flexível e equilibrada de você mesmo. O Pilates é mais do que um exercício; é uma abordagem holística que fortalece não apenas seu corpo, mas também sua mente. Descubra como nosso programa de Pilates pode elevar sua qualidade de vida.</p>
        <button onClick={() => window.location.href = 'https://wa.me/559183516196'}>Fale com a Doutora</button>
      </ContainerFor>
    </div>
  );
}
