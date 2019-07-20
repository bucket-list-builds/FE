import React, { Component } from 'react';
import ItemList from './itemList';
import axios from 'axios';

class BucketPage extends Component {
  constructor(props) {
    super(props);
  }



  
  render() {
    return (
      <ItemList
        bucketList={this.props.bucketList}
        bucketListID={this.props.bucketListID}
        updateBucket = {this.props.updateBucket}
        // completionToggle={this.props.completionToggle}
        // isOwner={this.state.isOwner}
        // goBackID={this.props.goBackID}
        // passedDownID={this.id}
      />
     
    );
  }
}

export default BucketPage;
