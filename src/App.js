import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import GamesPage from './GamesPage';
import GameForm from './GameForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
           <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">CRUD React Redux</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/games" className="nav-link">Games</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/games/new" className="nav-link">Add Game</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Route exact path="/games" component={GamesPage} />
                <Route path="/games/new" component={GameForm} />
            </div>
        );
    }
}

export default App;
