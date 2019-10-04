import React from 'react';
import {connect} from 'react-redux'
import {addMovie} from '../actions/action'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            figure: '',
            title: '',
            rating: '',
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    searchRating = (startRating) => {
        this.setState({
            rate: startRating,
        })
    }

    addMovie = (figure, title, rating) => {
        this.setState({
            carte: this.state.movies.concat({
                figure: figure,
                title: title,
                rating: rating
            }
            )
        })
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoding: false,
            })
        }, 2000);
    }
    render() {
        const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
        return (
            <div>
                <Button color="danger" onClick={this.toggle} className='Add-btn' >+{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
                    <ModalHeader>Add Movie</ModalHeader>
                    <ModalBody>
                        <input placeholder='figure' name='figure' className="modal-put" onChange={this.handleChange}></input>
                        <input placeholder='Title' name='title' className="modal-put" onChange={this.handleChange}></input>
                        <input placeholder='Rating' name='rating' className="modal-put" onChange={this.handleChange}></input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.props.addMovie({figure:this.state.figure, title:this.state.title, rating:this.state.rating}); this.toggle() }}>Add Movie</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
      addMovie: movie => dispatch(addMovie(movie))
    };
  }
const Form = connect(null, mapDispatchToProps)(ModalExample);
export default Form;


