import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Topics from './Components/Topics/Topics'
import Widgets from './Components/Widgets/Widgets'

function App() {
  return (
    <div class="app">
      <Sidebar />
      <Topics />
      <Widgets />
    </div>
  );
}

export default App;
