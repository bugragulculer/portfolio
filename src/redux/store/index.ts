import { createStore } from "redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: storage,
};

const Store = () => {
  const store = createStore(persistCombineReducers(persistConfig, rootReducer));

  const persistor = persistStore(store);
  return { store, persistor };
};

export default Store;
