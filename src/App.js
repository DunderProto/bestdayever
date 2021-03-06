import logo from './logo.svg';
import './App.css';
import SideBar from './components/side_bar/side_bar.jsx';
import MainSection from './components/main_section/main_section.jsx';

function App() {
  return (
    <>
      <div className="App flex">
        <SideBar />
        <MainSection />
      </div>
    </>
  );
}

export default App;
