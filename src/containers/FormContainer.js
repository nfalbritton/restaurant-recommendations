import React, {Component} from 'react'
import ReviewForm from '../components/ReviewForm'
import Select from '../components/Select'

class FormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      name:' ',
      ratingOptions: ['1', '2', '3', '4', '5' ],
      content: ' ',
      ratingSelected: ' '
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleRatingSelected = this.handleRatingSelected.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(event){
    this.setSet({ name: event.target.value})
    console.log(this.state.name)
  }

  handleContentChange(event){
    this.setState({ content: event.target.value})
  }

  handleRatingSelected(event){
    this.setState({rating: event.target.value})
  }

  handleFormSubmit(event){
    event.preventDefault();
    let formPayload = {
      restautant_id: this.props.restaurantSelected,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
    console.log(this.props.trackReview(formPayload));
  }

  render() {
    return(
      <form className='review' onSubmit={this.handleFormSubmit}>
        <ReviewForm
          content={this.state.name}
          label='Name'
          name='name'
          handlerFunction={this.handleNameChange}
        />
        <Select
          handlerFunction={this.handleRatingSelected}
          name='rating'
          label='Rating'
          options={this.state.ratingOptions}
          selectedOption={this.state.ratingSelected}
        />
        <ReviewForm
          content={this.state.content}
          label='Content'
          name='content'
          handlerFunction={this.handleContentChange}
        />
        <input className='button' type='submit' value='Submit'/>
      </form>
    )
  }
  }

export default FormContainer;
