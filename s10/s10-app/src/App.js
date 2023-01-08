import StateExample from "./state/StateExample"
import PropsParent from "./props/PropsParent"
import UpdateParent from "./update/UpdateParent";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <h1>User App</h1>
      <UserList />
      <h2>state</h2>
      <StateExample />
      <h2>props</h2>
      <PropsParent/>
      <h2>update</h2>
      <UpdateParent/>
      </div>


  );
}

export default App;
