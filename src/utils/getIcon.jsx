import { BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs";
import  iconSize  from "constants";

function getIconByType(type) {
    switch (type) {
        case "good":
           return <BsFillEmojiSmileFill color="green" size={iconSize.medium}/>;
            
        
        case "neutral":
           return <BsFillEmojiNeutralFill color="darkorange" size={iconSize.medium}/>;
          
        
        case "bad":
           return <BsFillEmojiFrownFill color="red" size={iconSize.medium}/>;
           
    }
 
}

export default getIconByType;