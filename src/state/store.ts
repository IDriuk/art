import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { AnyAction, combineReducers, createStore, Store, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools  } from "redux-devtools-extension";
import { quizzesReducer } from '../reducers'

const persistConfig = {
  key: "quiz-flow-boilerplate",
  storage: storageSession,
};

export const configStore = () => {
  const persistedReducer = persistReducer(persistConfig, combineReducers({quizzes: quizzesReducer}));
  let store: Store<{}, AnyAction> = createStore(
    persistedReducer, 
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );

  return {
    store,
    persistor: persistStore(store),
  };
};
