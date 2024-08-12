//All 3 files take from CodeSandbox.com
import "./styles.css";

function Greeter() {
  return <h1>GREET</h1>;
}
function Dog() {
  return <h3>Woof</h3>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Greeter />
      <h2>Start editing to see some magic happen!</h2>
      <Greeter />
      <Dog />
    </div>
  );
}
