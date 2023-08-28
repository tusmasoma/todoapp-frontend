
import React from "react"
import { Dialog } from "@mui/material"

type Props = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const UpdateDialog: React.FC<Props> = ({ open, onClose, children }) => {
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