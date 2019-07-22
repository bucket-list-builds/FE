import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import Axios from 'axios';


function Item(props) {


  const deleteCard = event  => {
    Axios
      .delete(`https://bucketlist-builds.herokuapp.com/home/${props.id}`)
      .then(res => {
        props.updateBucket(res.data);
        props.history.push('/bucketlist')
      }) 
      .catch(err => console.log(err));
  }

 


  return ( 
    <div>
    <Card className="card-item">
    <CardImg top width="100%" src="../../static/images" alt="Card image cap" />
    <CardBody>
      <CardTitle><h2>{props.listItemTitle}</h2></CardTitle>
      <CardText><p>{props.listItemText}</p></CardText>
        <button onClick={deleteCard}>Delete</button>
    </CardBody>
  </Card>
</div>
  );}


export default Item;