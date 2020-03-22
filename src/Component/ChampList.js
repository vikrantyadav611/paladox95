import React,{Fragment} from 'react'
import ReactImage from 'react-image'

export default function ChampList(props) {
    const {index,item,handlebtn}=props
    return (
        <Fragment>
            <ReactImage 
              key={item.id}
              style={{
                width:150,
                height:150,
                margin:20,
                padding:40,
                borderRadius:10,
                cursor:'pointer'
              }}
              onDoubleClick={handlebtn.bind(this, index)} 
              src={item.ChampionIcon_URL}
              loader={
                <img
                alt="placeholder"
                style={{ width: 40 }}
                src={'/assets/pala_1.png'}
              />
              }
              >
              </ReactImage>
        </Fragment>
    )
}
