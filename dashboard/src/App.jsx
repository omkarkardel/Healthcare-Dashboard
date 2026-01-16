import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    
    <div className="h-screen flex flex-col">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* BELOW NAVBAR */}
      <div className="flex flex-1">

        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-white p-6">
          Dashboard Content
        </main>

      </div>
    </div>

    </>
         
  );
}

export default App;
