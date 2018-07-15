import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HomePage from './components/Home/Home'

export const App = () => {
    return (
       <HomePage />
    )
}

ReactDOM.render(<App />, document.getElementById('app'));