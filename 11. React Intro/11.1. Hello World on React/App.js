import './App.css';
import './Component'
import Paragraph from './Component';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Walk the dog', 'take trash out', 'Study'];

function App() {
  return (
    <div>
      <Paragraph />
      <br />
      <ul>
        { task('Comprar comida') }
        { taskList.map(task => <li>{task}</li>) }
      </ul>
    </div>
  );
}

export default App;
