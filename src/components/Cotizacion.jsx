import styled from "@emotion/styled";

const Texto = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  span {
    font-weight: 700;
  }
`;

const Resultado = styled.div`
  font-family: "Lato", sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Precio = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1rem;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 100px;
`;

export const Cotizacion = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE, CHANGEPCT24HOUR } =
    cotizacion;
  return (
    <Resultado>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Logotipo criptomoneda"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resultado>
  );
};
