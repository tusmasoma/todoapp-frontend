
import React from "react";
import { TextField } from "@mui/material";

type Props = {
    value: string;
    onChange: (value: string) => void;
}

export const TitleEditField: React.FC<Props> = ({ value, onChange }) => {
    return (
        <TextField
            label="タイトル"
            variant="outlined"
            fullWidth
            value={value}
            onChange={ e => {
                onChange(e.target.value)
            }}
        />
    )
}