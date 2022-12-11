import styled from "styled-components";
const ButtonCard = styled.button`
display: flex;
margin: 10px;
width: 60%;
  background-color: #38FF88;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #000   ;
  font-size: 16px;
  padding: 12px 25px;
  right: 30px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #B4FFD2;
  }
`;
export default ButtonCard;