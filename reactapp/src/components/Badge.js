import * as React from 'react';
import { styled, Box } from '@mui/system';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import "@fontsource/ibm-plex-mono";


function BadgeContent(props) {

  let width
  let height
  if (props.size == "sm"){
    width = 105;
    height = 105
  } else {
    width = 504;
    height = 70
  }

  return (
    <Box
      component="span"
      sx={{
        width: {width},
        height: {height},
        
        background: '#FFC726',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    />
  );
}

export default function CategoryBadge(props) {
  let color = "#E381CD"


const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 80px;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  font-family: 'Ibm Plex Mono',
    'Segoe UI Symbol';
  position: relative;
  display: inline-block;
  line-height: 1;

  & .MuiBadge-badge {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
   
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: none;
    color: ${color};
    box-shadow: 0 0 0 1px #fff;
  }

  

  & .MuiBadge-anchorOriginTopRight {
    position: absolute;
    top: 0;
    right: 0;
   
    transform: translate(0%, 100%) rotate(-45deg);
    transform-origin: 70% 80%;
  }
`;

  return (
    <Box sx={{zIndex:"snackbar", '& > :not(style) + :not(style)': { ml: 4 } }}>
      <StyledBadge badgeContent={props.title}>
        <BadgeContent size={props.size}/>
      </StyledBadge>
    </Box>
  );
}