import profileImage from './img/me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>First React App</h1>
      <h2>Harry Tasker</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
