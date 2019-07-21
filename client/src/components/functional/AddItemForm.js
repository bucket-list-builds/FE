import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bucket: {
      title: '',
      description: '',
      user_id: this.props.user_id
      },
    };
  }


  // addBucket = event => {
  //   event.preventDefault();
  //   axios.
  //     post('https://buckitlist-backend.herokuapp.com/users/3/bucketlist', this.state.bucket)
  //       .then(res => {
  //         this.props.updateBucket(res.data)
  //         console.log('hi')
  //       })
  //       .catch(err => console.log('someting wrong with addBucket'));

  //       this.setState({
  //         itemTitle: '',
  //         itemText: ''
  //       });
  // }

  addBucket = e => {
    e.preventDefault();
    axios
      .post('https://bucketlist-builds.herokuapp.com/home', this.state.bucket)
        .then(res => {
          this.props.updateBucket(res.data)
          this.props.history.push('/bucketlist')
          console.log('adding')
        })
        .catch(err => {
          console.log(err)
        })
      
  }



  handleInputChange = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      bucket: { ...prevState.bucket, [ev.target.name]: value }
    }));
  };


  render() {
    return (
      <Form className="form-item">
        <FormGroup>
          <Label className="form-label-item" for="title">Title of your Buck List item</Label>
          <Input type="text" name="title" value={this.state.bucket.title} id="itemTitle" placeholder="Enter a title for your Todo" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label className="form-label-item" for="description">Describe your bucket list item</Label>
          <Input type="textarea" name="description" value={this.state.bucket.description} id="description" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label className="form-label-item" for="exampleFile">Want to upload a picture?</Label>
          <Input className="form-input-file-item" type="file" name="file" id="exampleFile" />
          <FormText className="form-text" color="black">
          Upload a photo to describe your bucket list item!
          </FormText>
        </FormGroup>

        <Button onClick={this.addBucket}>Submit</Button>
      </Form>
    );
  }
}