import "./App.css";
import Home from "./home";
import { PostContextProvider } from "./postContext";

const App = () => {
  return (
    <PostContextProvider>
      <Home />
    </PostContextProvider>
  );
};

export default App;
