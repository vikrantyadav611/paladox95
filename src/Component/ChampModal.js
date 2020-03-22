import React, { useState } from 'react'
import { Tabs, Tab, TabBody, Window, WindowHeader, WindowContent, Button, List, ListItem } from 'react95'
import { Container, Row, Col } from 'react-bootstrap'
import ReactImg from 'react-image'
import '../Component/ChampModal.css'

export default function MyTabs(props) {
    const [myvalue, setMyvalue] = useState(0)
    // const [newdata,setNewdata]=useState([])
    const { data, showmymodal } = props
    // newdata.push(data[iconindex])
    const changetab = (value) => {
        setMyvalue(value)
    }


    return (

        data.map(item => (

            <Window style={{ height: 400, width: 600 }}>

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
                            <Container>
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
                        myvalue === 1 &&
                        <TabBody>
                            <List fullWidth='true'>
                                <ListItem>
                                    <Row>
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
                                    <Row>
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
                                    <Row>
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
                                    <Row>
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
                                <ListItem><Row>
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
