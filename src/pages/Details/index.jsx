import React from 'react';
import { ContainerFirst, ContainerSecond, ContainerThree, ContainerFor, ContainerFive } from './Styles';

export function Details() {
  return (
    <div>
      <ContainerFirst>
        <h2>OLÁ! SOU A DRA. JULIANA SILVA, <br/> MUITO PRAZER</h2>
        <p>APAIXONADA POR FISIOTERAPIA GERAL<br/>REABILITAÇÃO MUSCULAR<br/>TRATAMENTO DE LESÕES<br/>PILATES</p>
        <button onClick={() => window.location.href = 'https://wa.me/seuNumeroDeTelefone'}>Fale com a Doutora</button>
      </ContainerFirst>

      <ContainerSecond>
        <h2>OLÁ! SOU A DRA. JULIANA SILVA, <br/> MUITO PRAZER</h2>
        <p>APAIXONADA POR FISIOTERAPIA GERAL<br/>REABILITAÇÃO MUSCULAR<br/>TRATAMENTO DE LESÕES<br/>PILATES</p>
        <button onClick={() => window.location.href = 'https://wa.me/seuNumeroDeTelefone'}>Contato</button>
      </ContainerSecond>
      <ContainerThree>
        <h2>OLÁ! SOU A DRA. JULIANA SILVA, <br/> MUITO PRAZER</h2>
        <p>APAIXONADA POR FISIOTERAPIA GERAL<br/>REABILITAÇÃO MUSCULAR<br/>TRATAMENTO DE LESÕES<br/>PILATES</p>
        <button onClick={() => window.location.href = 'https://wa.me/seuNumeroDeTelefone'}>Contato</button>
      </ContainerThree>
      <ContainerFor>
        <h2>OLÁ! SOU A DRA. JULIANA SILVA, <br/> MUITO PRAZER</h2>
        <p>APAIXONADA POR FISIOTERAPIA GERAL<br/>REABILITAÇÃO MUSCULAR<br/>TRATAMENTO DE LESÕES<br/>PILATES</p>
        <button onClick={() => window.location.href = 'https://wa.me/seuNumeroDeTelefone'}>Contato</button>
      </ContainerFor>
      <ContainerFive>
        <h2>OLÁ! SOU A DRA. JULIANA SILVA, <br/> MUITO PRAZER</h2>
        <p>APAIXONADA POR FISIOTERAPIA GERAL<br/>REABILITAÇÃO MUSCULAR<br/>TRATAMENTO DE LESÕES<br/>PILATES</p>
        <button onClick={() => window.location.href = 'https://wa.me/seuNumeroDeTelefone'}>Contato</button>
      </ContainerFive>
      
    </div>
  );
}
