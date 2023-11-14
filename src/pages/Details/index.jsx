import { Container } from './Styles';
export function Details(){
  
  return(
    <Container>
      <h2>OLÁ! SOU A DRA. JULIANA SILVA, <br/> MUITO PRAZER</h2>
      <p>APAIXONADA POR FISIOTERAPIA GERAL<br/>REABILITAÇÃO MUSCULAR<br/>TRATAMENTO DE LESÕES<br/>PILATES</p>
      <button onClick={() => window.location.href = 'https://wa.me/seuNumeroDeTelefone'}>Contato</button>
    </Container>
  )
}