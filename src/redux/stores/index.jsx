import { createStore} from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const rootStore = createStore(rootReducer);
//const rootStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default rootStore;