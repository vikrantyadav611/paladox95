import React, { useState } from 'react'
import { Tabs, Tab, TabBody, Window, WindowHeader, WindowContent, Button, List, ListItem } from 'react95'
import { Container, Row, Col } from 'react-bootstrap'
import ReactImg from 'react-image'
import '../Component/ChampModal.css'
import ClickAwayListener from 'react-click-away-listener'

export default function MyTabs(props) {
    const [myvalue, setMyvalue] = useState(0)
    const [row_one,setRow_one]=useState(false)
    const [row_two,setRow_two]=useState(false)
    const [row_three,setRow_three]=useState(false)
    const [row_four,setRow_four]=useState(false)
    const [row_fifth,setRow_fifth]=useState(false)

    // const [newdata,setNewdata]=useState([])
    const { data, showmymodal } = props
    // newdata.push(data[iconindex])
    const changetab = (value) => {
        setMyvalue(value)
    }

    return (

        data.map(item => (

            <Window style={{ height: 480, width: 600 }}>

                <WindowHeader
                    style={{
                        justifyContent: 'space-between',
                        display: 'flex'
                    }}
                >
                    <span>Champion.exe</span>
                    <Button size={'sm'} style={{cursor:'default', marginLeft: -3, marginTop: 3 }} onClick={showmymodal} >
                    <span className='closebtn'>x
                    </span>
                    </Button>
                </WindowHeader>
                <WindowContent >
                    <Tabs value={myvalue} onChange={changetab} style={{ marginBottom: '30' }}>
                        <Tab value={0}>Basic Details</Tab>
                        <Tab value={1}>Abilities</Tab>
                        <Tab value={2}>Lore</Tab>
                    </Tabs>
                    {
                        myvalue === 0 &&
                        <TabBody>
                            <Container style={{marginTop:30}}>
                                <Row>
                                    <Col>
                                        <ReactImg style={{ width: 140, height: 140 }}
                                            src={item.ChampionIcon_URL}
                                            loader={
                                                <img
                                                    alt="placeholder"
                                                    style={{ width: 50 }}
                                                    src={'/assets/pala_1.png'}
                                                />
                                            }
                                        />
                                    </Col>
                                    <Col>
                                        <List fullWidth='true'>
                                            <ListItem>Name: <strong>{item.Name}</strong></ListItem>
                                            <ListItem>Role: <strong>{item.Roles}</strong></ListItem>
                                            <ListItem>Speed: <strong>{item.Speed}</strong> </ListItem>
                                            <ListItem>Health: <strong>{item.Health}</strong> </ListItem>
                                        </List>
                                    </Col>
                                </Row>
                            </Container>



                        </TabBody>
                    }
                    {   
                         row_one && 
                         <ClickAwayListener onClickAway={()=>setRow_one(false)}>
                        <TabBody>
                            <Button style={{marginBottom:10}} onClick={()=>setRow_one(false)}>Go back</Button>
                            <Container>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                   <img 
                                    style={{width:150}}
                                    src={item.ChampionAbility1_URL}
                                    />
                                    <br/>
                                    <strong>{item.Ability1} </strong>
                                    </Col>
                                    <Col><p style={{textAlign:'justify'}}>{item.Ability_1.Description}</p></Col>
                                </Row>
                            </Container>
                        </TabBody>
                        </ClickAwayListener>
                        ||
                        row_two && 
                        <ClickAwayListener onClickAway={()=>setRow_two(false)}>
                       <TabBody>
                       <Button style={{marginBottom:10}} onClick={()=>setRow_two(false)}>Go back</Button>
                            <Container>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                   <img 
                                    style={{width:150}}
                                    src={item.ChampionAbility2_URL}
                                    />
                                    <br/>
                                    <strong>{item.Ability2} </strong>

                                    </Col>
                                    <Col><p style={{textAlign:'justify'}}>{item.Ability_2.Description}</p></Col>
                                </Row>
                            </Container>
                       </TabBody>
                       </ClickAwayListener>
                        ||
                        row_three && 
                        <ClickAwayListener onClickAway={()=>setRow_three(false)}>
                       <TabBody>
                       <Button style={{marginBottom:10}} onClick={()=>setRow_three(false)}>Go back</Button>
                            <Container style={{position:'relative'}}>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                   <img 
                                    style={{width:150}}
                                    src={item.ChampionAbility3_URL}
                                    />
                                    <br/>
                                    <strong>{item.Ability3} </strong>
                                    </Col>
                                    <Col><p style={{textAlign:'justify'}}>{item.Ability_3.Description}</p></Col>
                                </Row>
                            </Container>
                       </TabBody>
                       </ClickAwayListener>
                       ||
                        row_four && 
                        <ClickAwayListener onClickAway={()=>setRow_four(false)}>
                       <TabBody>
                       <Button style={{marginBottom:10}} onClick={()=>setRow_four(false)}>Go back</Button>
                            <Container style={{position:'relative'}}>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                   <img 
                                    style={{width:150}}
                                    src={item.ChampionAbility4_URL}
                                    />
                                    <br/>
                                    <strong>{item.Ability4} </strong>
                                    </Col>
                                    <Col><p style={{textAlign:'justify'}}>{item.Ability_4.Description}</p></Col>
                                </Row>
                            </Container>
                       </TabBody>
                       </ClickAwayListener>
                        ||
                        row_fifth && 
                        <ClickAwayListener onClickAway={()=>setRow_fifth(false)}>
                       <TabBody>
                       <Button style={{marginBottom:10}} onClick={()=>setRow_fifth(false)}>Go back</Button>
                            <Container style={{position:'relative'}}>
                                <Row>
                                    <Col style={{textAlign:'center'}}>
                                   <img 
                                    style={{width:150}}
                                    src={item.ChampionAbility5_URL}
                                    />
                                    <br/>
                                    <strong>{item.Ability5} </strong>
                                    </Col>
                                    <Col><p style={{textAlign:'justify'}}>{item.Ability_5.Description}</p></Col>
                                </Row>
                            </Container>
                       </TabBody>
                       </ClickAwayListener>
                       ||
                        myvalue === 1 &&
                        <TabBody>
                            <List fullWidth='true'>
                                <ListItem>
                                    <Row onClick={()=>setRow_one(true)}>
                                        <Col>
                                            <ReactImg style={{ width: 30, height: 30 }}
                                                src={item.ChampionAbility1_URL}
                                                loader={
                                                    <img
                                                        alt="placeholder"
                                                        style={{ width: 30 }}
                                                        src={'/assets/pala_1.png'} />
                                                }
                                            />
                                        </Col>
                                        <Col><strong>{item.Ability1}</strong></Col>
                                    </Row>
                                </ListItem>
                                <ListItem>
                                    <Row onClick={()=>setRow_two(true)}>
                                        <Col>
                                            <ReactImg style={{ width: 30, height: 30 }}
                                                src={item.ChampionAbility2_URL}
                                                loader={
                                                    <img
                                                        alt="placeholder"
                                                        style={{ width: 30 }}
                                                        src={'/assets/pala_1.png'} />
                                                }
                                            />
                                        </Col>
                                        <Col><strong>{item.Ability2}</strong></Col>
                                    </Row>
                                </ListItem>
                                <ListItem>
                                    <Row onClick={()=>setRow_three(true)}>
                                        <Col>
                                            <ReactImg style={{ width: 30, height: 30 }}
                                                src={item.ChampionAbility3_URL}
                                                loader={
                                                    <img
                                                        alt="placeholder"
                                                        style={{ width: 30 }}
                                                        src={'/assets/pala_1.png'} />
                                                }
                                            />

                                        </Col>
                                        <Col><strong>{item.Ability3}</strong></Col>
                                    </Row>
                                </ListItem>
                                <ListItem>
                                    <Row onClick={()=>setRow_four(true)}>
                                        <Col><ReactImg style={{ width: 30, height: 30 }}
                                            src={item.ChampionAbility4_URL}
                                            loader={
                                                <img
                                                    alt="placeholder"
                                                    style={{ width: 30 }}
                                                    src={'/assets/pala_1.png'} />
                                            }
                                        />
                                        </Col>
                                        <Col><strong>{item.Ability4}</strong></Col>
                                    </Row>
                                </ListItem>
                                <ListItem>
                                    <Row onClick={()=>setRow_fifth(true)}>
                                    <Col><ReactImg style={{ width: 30, height: 30 }}
                                        src={item.ChampionAbility5_URL}
                                        loader={
                                            <img
                                                alt="placeholder"
                                                style={{ width: 30 }}
                                                src={'/assets/pala_1.png'} />
                                        }
                                    />
                                    </Col>
                                    <Col><strong>{item.Ability5}</strong></Col>
                                </Row>
                                </ListItem>
                            </List>
                        </TabBody>
                    }
                    {
                        myvalue === 2 &&
                        <TabBody>
                            {item.Lore}
                        </TabBody>
                    }
                </WindowContent>
            </Window>
        ))

    )
}
