import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



const Tableformat = () => {
  var [people,setpeople]=useState([])

 
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
      console.log(response.data);
      setpeople(response.data)
      
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >name</TableCell>
            <TableCell align='right' >email</TableCell>
            <TableCell align='right'>username</TableCell>
           <TableCell  align='right'>image</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((v1,i)=>{
            return(
              <TableRow key={i}>
                <TableCell rowSpan={5} >{v1.title}</TableCell>
                <TableCell  align='right' rowSpan={5}>{v1.price}</TableCell>
                <TableCell  align='right' rowSpan={5}>{v1.category}</TableCell>
                <TableCell align='right'rowSpan={5}><img src={v1.image} alt=""  style={{width:'50px' ,height:'50px'}}/></TableCell><br/>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Tableformat