import './App.css';
import { Content } from './Content';
import { Menu } from './menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Content/>
      </header>
    </div>
  );
}

export default App;
