import React from 'react';
import Item from './item';
import { CardGroup } from 'reactstrap';
import Axios from 'axios';


const ItemList = props => {
  // const id = Number(props.match.params.id);
  // const card = props.bucketListID.find(card => {
  //   return card.id === id;
  // })

  // const deleteCard = event  => {
  //   Axios
  //     .delete(`https://bucketlist-builds.herokuapp.com/home/${card.id}`)
  //     .then(res => {
  //       props.updateBucket(res.data);
  //       props.history.push('/bucketlist')
  //     })
  //     .catch(err => console.log(err));
  // }

  return (
    <CardGroup className="fader">
      {props.bucketListID.map(item => {
        return (
          <div className="card-items">
          <span className='faded'>
          <Item
            listItemTitle={item.title}
            listItemText={item.description}
            id={item.id}
            completed={item.completed}
            jEntry={item.journal_entry}
            photo={item.photo}
            completionToggle={props.completionToggle}
            isOwner={props.isOwner}
            key={item.id}
            goBackID={props.goBackID}
            passedDownID={props.passedDownID}
            updateBucket = {props.updateBucket}
          />
          </span>
          {/* <button onClick={deleteCard}>Done</button> */}
          </div>
        );
      })}
    </CardGroup>
  );
};

export default ItemList;
