import styled from "@emotion/styled";
import { useState } from "react";

const Group = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  color: #fff;
  display: block;
  margin-bottom: 0.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
`;

const Select = styled.select`
  padding: 0.8rem;
  display: block;
  width: 100%;
  font-family: "Lato", sans-serif;
  border-radius: 0.5rem;
  border: 0;
  outline: none;
  font-size: 1.1rem;
`;

export const useSelectMonedas = (label, options) => {
  // Declarar estado en este hook
  // El estado es independiente por cada hook usado de este tipo
  const [state, setState] = useState("");

  // Componente Selector de Monedas
  const SelectMonedas = () => (
    <Group>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="" defaultValue disabled>
          Seleccione
        </option>
        {options.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Group>
  );

  // Los Hook deben retornar un arreglo o un objeto
  // Para este caso retornamos el estado actual y el componente de select
  return [state, SelectMonedas];
};
