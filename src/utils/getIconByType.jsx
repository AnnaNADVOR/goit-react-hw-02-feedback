import { BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs";
import iconSize from "../constants/iconSize";
import theme from "../constants/theme";

function getIconByType(type ) {
   switch ( type ) {
        case "good":
         return <BsFillEmojiSmileFill color={theme.colors.green} size={iconSize.medium}/>;
                    
        case "neutral":
           return <BsFillEmojiNeutralFill color={theme.colors.orange} size={iconSize.medium}/>;
          
        
        case "bad":
         return <BsFillEmojiFrownFill color={theme.colors.red} size={iconSize.medium}/>;
      
       default:
          return;
    }
 
}

export default getIconByType;