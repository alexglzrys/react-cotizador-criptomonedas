import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import ImagenCriptomonedas from "./assets/img/imagen-criptos.png";
import { Cotizacion } from "./components/Cotizacion";
import { Formulario } from "./components/Formulario";
import { Spinner } from "./components/Spinner";

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
  &::after {
    content: "";
    display: block;
    height: 0.2rem;
    width: 100px;
    margin: 0.5rem auto;
    background-color: #7a7dfe;
  }
  @media screen and (min-width: 768px) {
    margin: 4rem 0 1rem 0;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  // Efecto secundario que observa cambios en las monedas para invocar la API y generar una nueva cotización
  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      // Consultar API para la cotización de monedas
      const cotizarCriptomoneda = async () => {
        // setear estado actual
        setCargando(true);
        setCotizacion({});

        const { criptomoneda, moneda } = monedas;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(URL);
        const resultado = await respuesta.json();

        // Establecer nuevo estado
        setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };
      cotizarCriptomoneda();
    }
  }, [monedas]);

  const hanldeCotizarCriptomoneda = (monedas_seleccionadas) => {
    // Establecer las nuevas monedas a cotizar
    setMonedas(monedas_seleccionadas);
  };

  return (
    <Contenedor>
      {/* Los atributos se declaran de forma normal en un elemento img */}
      <Imagen src={ImagenCriptomonedas} alt="Imagen Criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario hanldeCotizarCriptomoneda={hanldeCotizarCriptomoneda} />
        {cargando && <Spinner />}
        {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  );
}

export default App;
