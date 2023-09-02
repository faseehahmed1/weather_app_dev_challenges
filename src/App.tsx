import classes from "./App.module.css";
import Menu from "./Menu/Menu";
import Results from "./Results/Results";
function App() {
  return (
    <div className={classes.container}>
        <Menu />
        <Results />
    </div>
  );
}

export default App;
