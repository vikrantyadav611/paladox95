import React from 'react'
import { Window, WindowHeader, WindowContent, Button } from 'react95'
import '../../Component/CSS/AboutModal.css'

export default function MyTabs(props) {

    const { closemodel } = props

    return (
        <Window>
            <WindowHeader
                style={{
                    justifyContent: 'space-between',
                    display: 'flex'
                }}
                >
                <span>About</span>
                <Button size='sm' onClick={closemodel} style={{ cursor:'default', marginTop: '3px', marginRight: '-2px' }}>
                   <span className='closebtn'> x</span>
                    </Button>
            </WindowHeader>
            <WindowContent style={{ width: 300,textAlign:'center' }}>
                <h2>PalaDox95</h2>
                 <strong>An open source Windows 95 style Paladox.</strong>
                    <br/>
                 <strong>Built with React, React95.</strong>
                    <br/>
                <strong>Champions icons crafted by <a href='https://twitter.com/Revov_drawings' target='_blank'>@Revov_drawings</a></strong>
                    <br/>
                <strong>with ❤️ by <a href='https://twitter.com/Breadistaken' target='_blank'>@dreddd</a></strong>
       
            </WindowContent>
        </Window>


    )
}
