import React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchFormPaper } from '../../atoms/Paper/Paper.styles';

export const SearchForm:React.FC = () => {
    return (
        <SearchFormPaper elevation={0}>
            <TextField
            fullWidth
            label="Search"
            variant="outlined"
            InputProps={{
                endAdornment: (
                <SearchIcon />
                ),
            }}
            />
        </SearchFormPaper>
    )
}