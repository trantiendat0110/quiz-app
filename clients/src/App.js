import './App.css';
import BoxMessage from './components/BoxMessage';
import InputMessage from './components/InputMessage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App w-full h-screen bg-slate-100 fixed top-0">
      <main className='w-1/3 h-2/3 shadow rounded bg-white mt-20 m-auto relative'>
        <Navigation></Navigation>
        <BoxMessage></BoxMessage>
        <InputMessage></InputMessage>
      </main>
    </div>
  );
}

export default App;
