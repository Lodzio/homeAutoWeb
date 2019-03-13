import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import testReducer from './reducer/element'

const rootReducer = combineReducers({
    test: testReducer
});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;