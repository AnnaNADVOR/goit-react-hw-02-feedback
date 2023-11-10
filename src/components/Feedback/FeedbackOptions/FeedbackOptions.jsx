import getIconByType from "utils";
import { ButtonList } from "./FeedbackOptions.styled";
    
function FeedbackOptions({ options, onLeaveFeedback }) {
console.log(options)
    return (
        < ButtonList>
            {options.map(option => {
                return (
                  <li key={option}>
                        <button
                            onClick={onLeaveFeedback} type="button"
                            id={option}>
                            {getIconByType(option)}{option}
                        </button>                   
                  </li>                       
                )
            })}       
        </ ButtonList>
    )
}

export default FeedbackOptions;
