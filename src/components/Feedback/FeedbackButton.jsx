function FeedbackButton({textContent, onLeaveFeedback}) {
    return (
  
        <button onClick={onLeaveFeedback} type="button">{textContent}</button>
     
    )
}

export default FeedbackButton