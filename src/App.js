import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Table, TableRow, TableHead,themes, TableHeadCell, TableDataCell, TableBody, Window, WindowContent, WindowHeader } from 'react95'

function App() {
  const [name, setName] = useState([])

  useEffect(async () => {
    await axios.get('champions.json')
      .then(function (result) {
        setName(result.data)
      })
  }, [])

  return (
    <ThemeProvider theme={themes.default}>

    <Window>  
      <WindowHeader>PalaPoop</WindowHeader>
      <WindowContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Speed</TableHeadCell>
            </TableRow>
          </TableHead>
          {name.map(item => (
            <TableBody>
              <TableRow>
                <TableDataCell>{item.Name} </TableDataCell>
                <TableDataCell>{item.Speed} </TableDataCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </WindowContent>
    </Window>
    </ThemeProvider>
  );
}

export default App;
