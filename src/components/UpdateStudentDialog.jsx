import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function UpdateStudentDialog({editDialogOpen,currentStudent,setCurrentStudent,setEditDialogOpen}) {
  const [open, setOpen] = React.useState(true);
  const handleDialogClose = ()=>{
    setEditDialogOpen(false)
    setCurrentStudent(null)
  }
  const handleChange = (event)=>{
const {name, value} = event.target;
setCurrentStudent((prev)=>({
    ...prev,
    [name]:value
}))
  }
  return (
      <Dialog
        open={editDialogOpen}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Update Student</DialogTitle>
        <DialogContent>
<TextField
margin='dense'
name = 'name'
label = 'Student Name'
type='text'
fullWidth
value={currentStudent?.name || ''}
onChange={handleChange}
 />
<TextField 
margin='dense'
name = 'age'
label = 'Student Age'
type='number'
fullWidth
value={currentStudent?.age || ''}
onChange={handleChange}
/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          {/* <Button onClick={handleClose} autoFocus>Save</Button> */}
        </DialogActions>
      </Dialog>
  );
}
