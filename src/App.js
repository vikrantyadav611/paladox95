import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { ThemeProvider } from 'styled-components';
import ChampModal from './Component/ChampModal'
import AboutModal from './Component/AboutModal'
import { Button, ListItem, Divider, List, Toolbar, themes, AppBar } from 'react95'
import ReactModal from 'react-responsive-modal'
import ChampList from './Component/ChampList'
import { Container } from 'react-bootstrap'
import ClickAwayListener from 'react-click-away-listener'
import { Howl } from 'howler'


function App() {
  const [name, setName] = useState([])
  const [btn, setBtn] = useState(false)
  const [i, setI] = useState()
  const [showmodal, setShowmodal] = useState(false)
  const [about_modal, setAbout_modal] = useState(false)
  const [hrs, sethrs] = useState()
  const [min, setmin] = useState()

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
    const local_time = new Date(Date())
    const hrs = local_time.getHours()
    const min = local_time.getMinutes()
     async function fetchdata(){
      await axios.get('paladins_champions.json')
      .then(function (result) {
        setName(result.data)
      }).catch(function (err) {
        console.log(err)
      })
     }
    
      fetchdata()
    sethrs(hrs)
    setmin(min)
  }, [])


  const handleModalClose = () => {
    setShowmodal(false)
  }

  const closeAboutModel = () => {
    setAbout_modal(false)
  }
  return (
    <div style={{ background: '#5aa', marginTop: '45px' }} >
      <ThemeProvider theme={themes.default}>
        {/* App Bar */}
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <ClickAwayListener onClickAway={handleAway}>

                  {
                    btn && (
                      <List horizontalAlign="left" verticalAlign="bottom" style={{ marginBottom: 5 }} open={btn} onClick={handleClose}>
                        <ListItem onClick={() => window.open('https://github.com/vikrantyadav611/paladox', '_blank')}>📚 Github Repo</ListItem>
                        <Divider />
                        <ListItem onClick={showAboutModel}>📁 About</ListItem>
                      </List>
                    )
                  }
                  <Button
                    active={btn}
                    onClick={handleClose}
                  ><img src='/assets/win_95_icon.png' />
                    <strong> Paladox95</strong>
                  </Button>

                </ClickAwayListener>
              </div>
              {
                showmodal && (
                  <Button
                    active={showmodal}
                    onClick={() => setShowmodal(!showmodal)}
                    className='champ_modal_btn'
                    style={{ marginLeft: 5 }}
                  ><img style={{ width: 22, height: 22 }} src='/assets/win95_task.png' /> <strong> Champion</strong></Button>
                )
              }
            </div>
            <div>
            {/* <TextField
              variant='default'
              style={{marginTop:-12,marginRight:5}}
              placeholder='Search...'
              value={champ_search}
              onChange={(e)=>setChamp_search(e.target.value)}
              /> */}
            <Button className='timebtn'><img style={{ width: 20, height: 20 }} src='/assets/speaker.png'></img>{hrs}:{min}{hrs > 12 ? 'PM' : 'AM'}</Button>
            </div>
          </Toolbar>

        </AppBar>
        {/* Champions Grid List */}
          
        <ChampList data={name} handlebtn={handlebtn}></ChampList>
         
        {/* Champion Modal */}
        <ReactModal
          children={
            <ChampModal data={[name[i]]} showmymodal={handleModalClose} ></ChampModal>
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
