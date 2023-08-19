
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Task } from '../../../types/types';

export const DetailDialog:React.FC<Task & { open: boolean, onClose: () => void; }> = ({ title, description, formatted_created_at, open, onClose }) => {

    return (
        <Dialog
        open={open} 
        onClose={onClose} 
        aria-labelledby="alert-dialog-title" 
        aria-describedby="alert-dialog-description"
        fullWidth={true}     
        maxWidth="sm"  
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }
                }
            >
                <DialogContentText>
                    作成日時: {formatted_created_at}
                </DialogContentText>
                <DialogContentText sx={{whiteSpace: "pre-line",color:'black'}} id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onClose}>
                    閉じる
                </Button>
            </DialogActions>

      </Dialog>
    )
}