import Leaderboard from "./components/Leaderboard";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/leaderboard" element={ <Leaderboard /> } />
    </Routes>
  );
}

export default App;
