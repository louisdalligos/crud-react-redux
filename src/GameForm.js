import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveGame } from './actions';

class GameForm extends React.Component {

    state = {
        title: '',
        cover: '',
        done: false
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        const { title, cover } = this.state
        this.props.saveGame({ title, cover }).then(
            () => { this.setState({ done: true })},
        );

        console.log('submitted')
    }

    render() {
        const form = (
            <div className="container">
                <h3>Add a new game</h3>

                <Form onSubmit={this.handleOnSubmit} noValidate>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input 
                            type="text" 
                            name="title"
                            value={this.state.title}
                            onChange={this.handleOnChange}
                            placeholder="Enter a title"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="cover">Cover</Label>
                        <Input type="text" 
                               name="cover"
                               value={this.state.cover}
                               onChange={this.handleOnChange} 
                               placeholder="Enter a cover" 
                        />
                    </FormGroup>

                    <FormGroup>
                        {this.state.cover !== '' && <img src={this.state.cover} alt="cover" />}
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>
            </div>
        )
        return (
            <div>
                { this.state.done ? <Redirect to="/games" /> : form }
            </div>
        );
    }
}

export default connect(null, { saveGame })(GameForm);