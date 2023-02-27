import { useSelector, useDispatch } from 'react-redux'
import { incriment, decriment, showCount } from './Redux/Actions/Action'
import './App.css';

function App() {
  const count = useSelector(state => state.CountReducer)
  const show = useSelector(state => state.ShowReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(showCount())}> {show ? "Hide" : "SHOW"} </button>

      { show ?
        <header className="App-header">
          <button onClick={() => dispatch(decriment())}> - </button>
          {count}
          <button onClick={() => dispatch(incriment())}> + </button>
        </header>
        : <h1> COUNTER 404 NOT FOUND </h1>
      }
    </div>
  );
}

export default App;
