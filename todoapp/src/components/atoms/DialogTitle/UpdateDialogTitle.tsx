import React from "react";
import { DialogTitle } from "@mui/material";

type Props = {
    title: string;
}

export const UpdateDialogTitle: React.FC<Props> = ({ title }) => {
    return (
        <DialogTitle
            id="alert-dialog-title"
            sx={{ paddingLeft: '5px' }}
        >
            {title}
        </DialogTitle>
    )
}