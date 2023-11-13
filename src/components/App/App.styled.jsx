import styled from '@emotion/styled'; 

export const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px; 
    font-size: 30px;
    color: ${({theme}) => theme.colors.primaryBlack};
    letter-spacing: .03em;
`