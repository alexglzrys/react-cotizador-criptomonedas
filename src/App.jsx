import styled from "@emotion/styled";
import ImagenCriptomonedas from "./assets/img/imagen-criptos.png";

// Styled Components
// Los estilos se encuentran encapsulados en cada componente, si un componente se elimina sus estilos también (limpieza sana en el proyecto)
// Se declaran siempre fuera del cuerpo del componente
// Se declara CSS tradicional
// Se debe especificaar el tipo de elemento HTML que se debe compilar con el respectivo estilo css declarado
// npm i @emotion/react @emotion/styled - son librerías necesarias para trabajar con Styled Components en React

// Crear componente del tipo div con estilo
const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;

// Crear componente del tipo img con estilo
const Imagen = styled.img`
  max-width: 400px;
  display: block;
  margin: 4rem auto 2rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin: 4rem auto 0;
  }
`;

// Crear componente del tipo h1 con estilo
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 0 0 1rem 0;
  @media screen and (min-width: 768px) {
    margin: 4rem 0 1rem 0;
  }
`;

function App() {
  return (
    <Contenedor>
      {/* Los atributos se declaran de forma normal en un elemento img */}
      <Imagen src={ImagenCriptomonedas} alt="Imagen Criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
      </div>
    </Contenedor>
  );
}

export default App;
