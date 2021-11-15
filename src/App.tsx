import Setup from "./AppRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/styles.scss";

document.title = "Bugra Gulculer";

const App = ({ store, persistor }: any) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Setup />
      </PersistGate>
    </Provider>
  );
};

export default App;
