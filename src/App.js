import { useReducer } from 'react';
import { StateProvider } from './context';
import Cat from './components/Cat';
import './App.css';

function App() {
  const defaultState = {
    activity: 'in a bad mood!'
  }

  const contextReducer = (state, action) => {
    switch (action.type) {
      case 'ACTION_PLOT':
        return {
          activity: 'deeply offended and now plotting revenge!'
        }
      case 'ACTION_FORGIVE':
        return {
          activity: 'feeling nice and grants you forgiveness, I suppose.'
        }
      default:
        return state
    }
  }

  return (
    <div className="App">
      <StateProvider value={useReducer(contextReducer, defaultState)}>
        <h1>Cat + Context!</h1>
        <img src="/madcat.gif"></img>
        <Cat />
      </StateProvider>
    </div>
  );
}

export default App;