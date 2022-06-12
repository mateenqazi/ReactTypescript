import ReactDOM from "react-dom";
import SearchUser from "./refs/SearchUser";

const App = () => {
  return (
    <div>
      <SearchUser />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)