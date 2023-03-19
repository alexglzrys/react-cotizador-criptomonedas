import styled from "@emotion/styled";
import { monedas } from "../data/monedas";
import { useSelectMonedas } from "../hooks/useSelectMonedas";

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
  // Usar hook personalizado para los selectores de moneda
  const [moneda, SelectMoneda] = useSelectMonedas("Elige tu moneda", monedas);
  return (
    <form>
      <SelectMoneda />
      <InputSubmit type="button" value="Cotizar" />
    </form>
  );
};
