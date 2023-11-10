function FeedbackOptions( {options, onLeaveFeedback}) {
 
    return (
        <ul>
            {options.map(option => {
                return (
                    <li key={option}>
                        <button onClick={onLeaveFeedback} type="button" id={option}>{option}</button>
                    </li>
                )
            })}    
     
        </ul>
    )
}

export default FeedbackOptions;