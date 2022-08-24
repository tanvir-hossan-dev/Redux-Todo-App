import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";

function App() {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />

        <hr class="mt-4" />

        <Todos />

        <hr class="mt-4" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
