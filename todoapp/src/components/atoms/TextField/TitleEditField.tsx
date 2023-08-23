
import React from "react";
import { TextField } from "@mui/material";

type TitleEditFieldProps = {
    value: string;
    onChange: (value: string) => void;
}

export const TitleEditField: React.FC<TitleEditFieldProps> = ({ value, onChange }) => {
    return (
        <TextField
            label="タイトル"
            variant="outlined"
            fullWidth
            value={value}
            onChange={(e) => {
                if (e.target.value.trim() !== ""){
                    onChange(e.target.value)
                }
            }}
        />
    )
}