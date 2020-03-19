import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {Table,TableContainer,TableHead,TableRow,TableCell, TableBody} from '@material-ui/core'


function App() {
  const [name,setName]=useState([])

  useEffect(async()=>{
    await axios.get('champions.json')
    .then(function(result){
      // console.log(result)
      setName(result.data)
    })
  },[])

  return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name </TableCell>
              <TableCell align='center'>Speed </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              name.map((item,index)=>(
                <TableRow>
                  <TableCell align='center'>{item.Name}</TableCell>
                  <TableCell align='center'>{item.Speed}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default App;
