// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex gap-8">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#about" className="text-white">About</a></li>
        <li><a href="#contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  );
};

// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Your Website. All rights reserved.</p>
    </footer>
  );
};

// App.jsx
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to our website</h1>
        <p>This is the main content area.</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;