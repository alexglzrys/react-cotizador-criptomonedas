import styled from "@emotion/styled";

const Mensaje = styled.p`
  background-color: #7e0000;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.9rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: "Lato", sans-serif;
`;

export const Error = ({ children }) => {
  return <Mensaje>{children}</Mensaje>;
};
