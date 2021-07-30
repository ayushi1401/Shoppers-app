import styled from 'styled-components';

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 16px;
  background: transparent;x
  border: 2px solid var(--mainWhite);
  color: ${props => props.cart ?  "var(--mainYellow)":"var(--mainBlue)"};
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px 10px 5px 0px;
  transition: all 0.5s ease-in-out;
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  &:hover {
    background: ${props => props.cart ?  "var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`
export default ButtonContainer