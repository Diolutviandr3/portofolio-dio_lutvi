import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Ganti dari "/pages/Home"
import Projects from "./pages/Projects";  // Ganti dari "/pages/Projects"
import Contact from "./pages/Contact";  // Ganti dari "/pages/Contact"
import Navbar from "./components/Navbar";  // Pastikan ini benar
import "./App.css";  // Perhatikan huruf besar

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="text-center mt-10">404 - Halaman Tidak Ditemukan</div>
          }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;