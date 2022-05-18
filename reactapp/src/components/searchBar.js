import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

export default function ComposedTextField() {
    const [name, setName] = useState('Composed TextField');
  
    const handleChange = (event) => {
      setName(event.target.value);
    };

    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" value={name} onChange={handleChange} />
          </FormControl>
          
          
        </Box>
      );
    }