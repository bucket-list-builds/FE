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
      <CardTitle>{props.listItemTitle}</CardTitle>
      <CardText>{props.listItemText}</CardText>
      {/* <Button onClick={(event)=> isOwner ? this.props.completionToggle(event) : null} data-key={this.props.id}>{this.props.completed ? 'Complete' : 'Incomplete'}</Button> */}
        <button onClick={deleteCard}>Delete</button>
    </CardBody>
  </Card>
</div>
  );}


export default Item;