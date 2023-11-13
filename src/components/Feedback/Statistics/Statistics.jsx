import { StatisticContainer, Rating, RatingValue } from "./Statictics.styled";

function Statistics({ good, neutral, bad, total, percentage }) {
    return (
        <StatisticContainer>
            <Rating>Good: <RatingValue>{good}</RatingValue></Rating>
            <Rating>Neutral: <RatingValue>{neutral}</RatingValue></Rating>
            <Rating>Bad: <RatingValue>{bad}</RatingValue></Rating>
            <Rating>Total: <RatingValue>{total}</RatingValue></Rating>
            <Rating>Positive feedback: <RatingValue>{percentage}%</RatingValue></Rating>            
       </StatisticContainer>
    )
}

export default Statistics