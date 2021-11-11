import React from 'react'
import { Card,Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Child({wael,z,data,children}) {
    return (
        <div>
            <h2>this is the child component</h2>
           <h3> {wael}</h3>
            <p>{z}</p>
       {
           data.map((el,i)=>(
          <div style={{display:"flex",justifyContent:'center',alignItems:"center"}} >
                <Card style={{ width: '18rem', }} key={i} >
            <Card.Img variant="top" src={el.url} />
            <Card.Body>
              <Card.Title>{el.user}</Card.Title>
              <Card.Text>
                this is the email address:{el.email}
              </Card.Text>
              <Button variant="primary">{el.location}</Button>
            </Card.Body>
          </Card>
          </div>
           ))
       }
       {children}
        </div>
    )
}

export default Child
//Default Props

Child.defaultProps={
    z:'not found'
}

//propTypes

Child.propTypes={
    z:PropTypes.number
}
