import styled from '@emotion/styled';


export const StatisticContainer = styled.div `
  
`

export const Rating = styled.p `
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    
    &:last-child {
        font-style: italic;
        font-weight: 600;
    }
`

export const RatingValue = styled.span`
    color: ${({theme}) => theme.colors.grey};
`
