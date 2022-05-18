import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';




function CustomButton(props) {


let bgStyle
if (props.color == "yellow"){
bgStyle ="#FFC726"
} else{
    bgStyle="#E381CD"
}

let bgSize 
if (props.size =="sm"){
   bgSize = "8px 25px"
} else if(props.size =="md"){
    bgSize = "8px 40px"
} else if (props.size=="lg"){
    bgSize = "8px 174px"
}

const blue = {
  500: bgStyle,
  600: bgStyle,
  700: bgStyle =="#FFC726"?"#E381CD":"#FFC726",
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Mono;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: ${bgSize};
  border-radius: 75px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
    border: 1px solid
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
    
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function StyledButton(props) {
const {handleClick} = props;

  return (
    
      <CustomButton onClick={()=> handleClick()} {...props}>{props.title}</CustomButton>
 
  );
}