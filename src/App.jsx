import './App.css';
import Footer from './components/SimpleFooter';
import Navbar from './components/Navbar';


function App() {
  return (
  <div>
    <Navbar />
      <div className='m-2 grid sm:grid-cols-12 gap-2'>
        <div className='min-h-[300px] rounded-lg bg-teal-500 shadow sm:col-span-5'></div>
        <div className='min-h-[300px] rounded-lg bg-blue-500 shadow sm:col-span-7'></div>
      </div>
    <Footer />
  </div>

  
  );
}

export default App;
