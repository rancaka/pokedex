var redux = require('redux');
var thunk = require('redux-thunk').default;

var { pokemonsReducer, pokemonDetailReducer } = require('../reducers');

module.exports = function(initialState={}) {
    var reducer = redux.combineReducers({
        pokemons: pokemonsReducer,
        pokemonDetail: pokemonDetailReducer
    });

    var store = redux.createStore(
        reducer,
        initialState,
        // Add THUNK middleware for handling asynchronous actions
        redux.compose(
            redux.applyMiddleware(thunk)
        )
    );

    return store;
}