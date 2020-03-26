import React,{Fragment} from 'react';
import { Button, ListItem, Divider, List, Toolbar } from 'react95'
import ClickAwayListener from 'react-click-away-listener'

const Appbar = (props) => {

    const {handleAway,handleClose,showAboutModel,showmodal,btn,setShowmodal,handle_time,time}=props

    return (
       <Fragment>
           <Toolbar style={{ justifyContent: 'space-between' }}>
            <div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <ClickAwayListener onClickAway={handleAway}>

                  {
                    btn && (
                      <List horizontalAlign="left" verticalAlign="bottom" style={{ marginBottom: 5 }} open={btn} onClick={handleClose}>
                        <ListItem onClick={() => window.open('https://github.com/vikrantyadav611/paladox95', '_blank')}>📚 Github Repo</ListItem>
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
            <Button onClick={handle_time} className='timebtn'><img style={{ width: 20, height: 20 }} src='/assets/speaker.png'></img>{time}</Button>
            </div>
          </Toolbar>
       </Fragment>
    );
}

export default Appbar;
