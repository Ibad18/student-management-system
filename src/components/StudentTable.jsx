import * as React from 'react';
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import students from '../App';
import setStudents  from '../App';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../firebaseConfig';

export default function StudentTable({students}) {
    const studentId = students.id
function handleUpdateStudent(studentId){
    alert(studentId)
}
const handleDeleteStudent = async (studentId)=>{
    try {
        const studentDoc = doc(db, 'students', studentId)
        await deleteDoc(studentDoc)
        alert("Student successfully deleted")
        setStudents(students.filter((student)=>student.id !== studentId))
      } catch (error) {
        console.error('Error removing document: ', error);
      }
}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell align="right">Roll No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Action</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {student.name}
              </TableCell> */}
              <TableCell align="right">{student.rollNo}</TableCell>
              <TableCell align="right">{student.name}</TableCell>
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">
                {<EditIcon onClick = {()=>handleUpdateStudent(student.id)} style={{cursor:'pointer', marginLeft:'10px', color:'blue'}}/>}
                {<DeleteIcon onClick= {()=>handleDeleteStudent(student.id)} style={{cursor:'pointer', color:'red'}} />
                }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}