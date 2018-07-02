import React from 'react';
import GamesList from './GamesList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGames } from './actions';

class GamesPage extends React.Component {
    
    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        return (
            <div className="container">
                <h3>Games List</h3>

                <GamesList games={this.props.games} />
            </div>
        );
    }
}

GamesPage.protoTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage);