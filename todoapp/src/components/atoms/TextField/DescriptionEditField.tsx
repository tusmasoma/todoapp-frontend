
import React from "react";
import { TextField } from "@mui/material";

type DescriptionEditProps = {
    value: string;
    onChange: (value: string) => void;
}

export const DescriptionEditField: React.FC<DescriptionEditProps> = ({ value, onChange }) => {
    return (
        <TextField
            label="説明"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={value}
            onChange={(e) => {
                if (e.target.value.trim() !== ""){
                    onChange(e.target.value)
                }
            }}
        />
    )
}