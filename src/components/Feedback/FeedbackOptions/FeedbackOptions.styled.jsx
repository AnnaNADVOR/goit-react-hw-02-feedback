import styled from '@emotion/styled';

export const ButtonList = styled.ul`
    list-style: none;
    display: inline-flex;
    gap: 20px;
    padding: 0; 
`

export const Button = styled.button `
  width:50px;
  height:50px;
  border-radius: 50%;
  border: none;
  padding:0;
  box-shadow: 0px 4px 4px rgba(0,0,0,.15);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.2);    
  }
`
export const ButtonItem = styled.li`
  text-align: center;
  padding:10px; 
`

export const OptionLabel = styled.p`
  margin-top: 5px; 
  font-weight: 600;
  color: ${({labelType, theme}) => {
   switch (labelType) {
    case "good":
      return theme.colors.green; 
    
    case "neutral":
      return theme.colors.orange; 
    
    case "bad":
      return theme.colors.red; 
    
    default:
      return theme.colors.primaryBlack;
  }
 
  }}
`