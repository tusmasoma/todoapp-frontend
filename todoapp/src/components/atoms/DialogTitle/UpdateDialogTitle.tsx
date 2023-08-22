import React from "react";
import { DialogTitle } from "@mui/material";

type UpdateDialogTitleProps = {
    title: string;
}

export const UpdateDialogTitle: React.FC<UpdateDialogTitleProps> = ({ title }) => {
    return (
        <DialogTitle
            id="alert-dialog-title"
            sx={{ paddingLeft: '5px' }}
        >
            {title}
        </DialogTitle>
    )
}