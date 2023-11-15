import getIconByType from "utils";
import { ButtonList, Button, ButtonItem, OptionLabel } from "./FeedbackOptions.styled";

    
function FeedbackOptions({ options, onLeaveFeedback }) {
    
      return (
        < ButtonList>
            {options.map(option => {
                return (
                    <ButtonItem key={option}>
                     
                         <Button type="button"
                            onClick={onLeaveFeedback} 
                            id={option}>
                            {getIconByType(option)}
                        </Button>  

                        <OptionLabel labelType={option}>{option}</OptionLabel>
                  </ButtonItem>                       
                )
            })}       
        </ ButtonList>
    )
}

export default FeedbackOptions;
