import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import products from './products/productsReduser';



const store = createStore( products , applyMiddleware(thunk));

export default store;