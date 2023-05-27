import './App.css';
import Calendar from './components/Calendar';

const now = new Date (2023, 4, 27);


function App() {
  return (
    <Calendar date={now} />
  );
}

export default App;
