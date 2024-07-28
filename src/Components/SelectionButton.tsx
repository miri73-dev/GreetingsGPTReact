// import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { RootState } from '../App';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectionButton({label, selectedTitle}:{label:string, selectedTitle:string}) {

  const buttonsOptions = useSelector((state:RootState)=>
    state.buttonSlice.buttons
  )
  
  const selectorButton = buttonsOptions.find(button=>button.title === selectedTitle)

  const [choice, setChoice] = useState<string[]>([]);
  const [display, setDisplay] = useState(false);

  useEffect(()=>{

  },[choice])
  
  useEffect(()=>{
    setDisplay(true)
  },[])
  
  const handleChange = (event: SelectChangeEvent<typeof choice>) => {
    const {
      target: { value },
    } = event;
    setChoice(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={choice}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          disabled={!display}
        >
        {selectorButton &&
          selectorButton.options &&
          selectorButton.options.map((option, index) => (
            <MenuItem key={index} value={typeof option === 'object' ? option.title : option}>
              {typeof option === 'object' ? option.title : option}
            </MenuItem>
          ))}
                  
        </Select>
      </FormControl>
    </div>
  );
}