import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import deviceReducer from './reducer/device'

const rootReducer = combineReducers({
    device: deviceReducer
});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;