export const LIST_GAMES = 'LIST_GAMES';

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        
    }

}

export function listGames(games) {
    return {
        type: LIST_GAMES,
        games
    }
}

export function saveGame(data) {
    return dispatch => {
        return fetch('/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
    }
}

export function fetchGames() {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(listGames(data.games)));
    }
}