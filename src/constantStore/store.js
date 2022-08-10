import { applyMiddleware,createStore,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas";
import reducer from "../redux/reducers"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =  (window && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const configureStore = (preloaderState)=>createStore(
    reducer,
    preloaderState, 
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

const store = configureStore({})
sagaMiddleware.run(rootSaga)

export default store