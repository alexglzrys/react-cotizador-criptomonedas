import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import { useSelectMonedas } from "../hooks/useSelectMonedas";
import { Error } from "./Error";

const InputSubmit = styled.input`
  width: 100%;
  padding: 0.8rem;
  color: #fff;
  display: block;
  cursor: pointer;
  border-radius: 0.25rem;
  border: 0;
  outline: none;
  background-color: #9497ff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  transition: background-color 0.2s;
  margin-top: 2rem;
  &:hover {
    background-color: #7a7dfe;
  }
`;

export const Formulario = () => {
  // Estado para almacenar las criptomonedas recuperadas desde el API
  const [criptomonedas, setCriptomonedas] = useState([]);
  const [error, setError] = useState(false);

  // Usar hook personalizado para los selectores de moneda
  const [moneda, SelectMoneda] = useSelectMonedas("Elige tu moneda", monedas);
  // Una vez recuperadas las criptos, el componente se actualiza, pues se almacenan en el estado local de este componente, por tanto, cuando se vuelva a pintar se le pasa el listado de criptos recuperadas al hook personalizado
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elige tu criptomoneda",
    criptomonedas
  );

  // Efecto secundario para obtener información de un API
  useEffect(() => {
    const consultarAPI = async () => {
      const URL =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();
      const arrayCriptomonedas = resultado.Data.map((cripto) => ({
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName,
      }));
      setCriptomonedas(arrayCriptomonedas);
    };
    consultarAPI();
  }, []);

  // Controlador de envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar campos de formulario
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return false;
    }
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>Todos los campos son requeridos</Error>}
      <SelectMoneda />
      <SelectCriptomoneda />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};
