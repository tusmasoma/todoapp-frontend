
import React from "react"
import { Dialog } from "@mui/material"

type UpdateDialogProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const UpdateDialog: React.FC<UpdateDialogProps> = ({ open, onClose, children }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            maxWidth="sm"
        >
            {children}
        </Dialog>
    )
}