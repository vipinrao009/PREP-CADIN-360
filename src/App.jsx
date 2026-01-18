import { Suspense, lazy } from "react";
import Spinner from "./custom-components/Spinners";
import MemoAndCallback from "./page/MemoAndCallback";
import Debounce from "./page/Debounce";

const Todo = lazy(() => import("./page/Todo"));

const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<Spinner/>}>
        <Todo/>
      </Suspense> */}
      <MemoAndCallback />
      <Debounce />
    </div>
  );
};

export default App;
