export const LIST_GAMES = 'LIST_GAMES';

export function listGames(games) {
    return {
        type: LIST_GAMES,
        games
    }
}

export function fetchGames() {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(listGames(data.games)));
    }
}