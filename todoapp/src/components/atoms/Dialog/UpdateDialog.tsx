
import React from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import { CancelUpdateButton } from "src/components/atoms/Button/CancelUpdateButton"
import { ConfirmUpdateButton } from "src/components/atoms/Button/ConfirmUpdateButton"
import { TitleEditField } from "src/components/atoms/TextField/TitleEditField"
import { DescriptionEditField } from "src/components/atoms/TextField/DescriptionEditField"

type Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    editedTitle: string;
    setEditedTitle: (title: string) => void;
    editedDescription: string;
    setEditedDescription: (description: string) => void;
    handleUpdate: () => void;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
}

export const UpdateDialog: React.FC<Props> = ({
    isOpen,
    onClose,
    title,
    editedTitle,
    setEditedTitle,
    editedDescription,
    setEditedDescription,
    handleUpdate,
    ariaLabelledBy,
    ariaDescribedBy,
}) => {
    const isDisabled = !editedTitle.trim() || !editedDescription.trim();

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            aria-labelledby={ariaLabelledBy || 'default-label-id'}
            aria-describedby={ariaDescribedBy || 'default-description-id'}
        >
            <DialogTitle sx={{ paddingLeft: '5px' }}>{title}</DialogTitle>
            <DialogContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
            }}>
                <TitleEditField value={editedTitle} onChange={setEditedTitle} />
                <DescriptionEditField value={editedDescription} onChange={setEditedDescription} />
            </DialogContent>
            <DialogActions sx={{ padding: '10px 20px' }}>
                <CancelUpdateButton onClick={onClose} />
                <ConfirmUpdateButton onClick={handleUpdate} disabled={isDisabled} />
            </DialogActions>
        </Dialog >
    );
};
