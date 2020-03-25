import React, { useState, useEffect } from 'react';
import './App.css';

/* Components */
import ChampModal from './Component/JS/ChampModal'
import AboutModal from './Component/JS/AboutModal'
import ChampList from './Component/JS/ChampList'
import ChampAppBar from './Component/JS/ChampAppBar'

/* Packages */
import {themes, AppBar } from 'react95'
import axios from 'axios'
import { ThemeProvider } from 'styled-components';
import ReactModal from 'react-responsive-modal'
import { Howl } from 'howler'


function App() {
  const [name, setName] = useState([])
  const [btn, setBtn] = useState(false)
  const [i, setI] = useState()
  const [showmodal, setShowmodal] = useState(false)
  const [about_modal, setAbout_modal] = useState(false)
  const [time, setTime] = useState()

  const handlebtn = (index) => {
    var sound = new Howl({
      src: [name[index].Audio]
    })
    sound.play()
    setShowmodal(true)
    setI(index)

  }
  const showAboutModel = () => {
    setAbout_modal(true)
  }
  const handleClose = () => {
    setBtn(!btn)
  }

  const handleAway = () => {
    setBtn(false)
  }

  useEffect(() => {
    setInterval(current_time,1000)
     async function fetchdata(){
      await axios.get('paladins_champions.json')
      .then(function (result) {
        setName(result.data)
      }).catch(function (err) {
        console.log(err)
      })
     }
    
    fetchdata()
    // setmin(min)
  }, [])

  const current_time=()=>{
    const timer=Date()
    const local_time=timer.slice(16,24)
    setTime(local_time)
  }
  const handleModalClose = () => {
    setShowmodal(false)
  }

  const closeAboutModel = () => {
    setAbout_modal(false)
  }
  const handle_time=()=>{
    const ultSound=new Howl({
      src:'assets/ogg/Atlas_Ult.ogg'
    })
    ultSound.play()
  }

  return (
    <div style={{ background: '#5aa', marginTop: '45px' }} >
      <ThemeProvider theme={themes.default}>

        {/* App Bar */}
        <AppBar>
        <ChampAppBar
        handleAway={handleAway}
        btn={btn}
        handleClose={handleClose}
        showAboutModel={showAboutModel}
        showmodal={showmodal}
        handle_time={handle_time}
        time={time}
        />
        </AppBar>
        

        {/* Champions Grid List */}
          
        <ChampList data={name} handlebtn={handlebtn}></ChampList>
         
        {/* Champion Modal */}
        <ReactModal
          children={
            <ChampModal
            data={[name[i]]} 
            showmymodal={handleModalClose} 
            />
          }
          center={true}
          animationDuration={0}
          open={showmodal}
          styles={{ marginTop: '50px' }}
          showCloseIcon={false}
          onClose={() => setShowmodal(false)}
          contentLabel="Example Modal"
        />

        {/* About Modal */}
        <ReactModal
          onClose={() => setAbout_modal(false)}
          animationDuration={0}
          center={true}
          children={
            <AboutModal closemodel={closeAboutModel}>
            </AboutModal>
          }
          open={about_modal}
          showCloseIcon={false}
        />
      </ThemeProvider>
    </div>

  );
}

export default App;
