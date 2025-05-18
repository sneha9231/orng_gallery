import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(!isLoggedIn);
  const handleGenerate = () => console.log('Generating art with prompt:', prompt);

  // Demo images (replace with your generated ones)
  const images = [
    { src: 'https://source.unsplash.com/random/400x400?sig=1', alt: 'Art 1' },
    { src: 'https://source.unsplash.com/random/400x400?sig=2', alt: 'Art 2' },
    { src: 'https://source.unsplash.com/random/400x400?sig=3', alt: 'Art 3' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-600 tracking-tight">Orange Gallery</h1>
          <button
            onClick={handleLogin}
            className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg text-base sm:text-lg font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${
              isLoggedIn ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
            {isLoggedIn ? 'Logged In' : 'Login with Orange ID'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-2 sm:px-6 py-6 sm:py-10">
        {/* Prompt Input Section */}
        <section className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-lg p-4 sm:p-8 mb-8 flex flex-col gap-4">
          <label htmlFor="prompt" className="block text-base sm:text-lg font-medium text-gray-700 mb-1">
            Enter your art prompt
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <input
              type="text"
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the art you want to generate..."
              className="flex-1 rounded-lg border border-gray-300 shadow-sm px-3 py-2 sm:py-3 text-base sm:text-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition outline-none"
            />
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim()}
              className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors text-base sm:text-lg shadow"
            >
              Generate Art
            </button>
          </div>
        </section>

        {/* Generated Images Section */}
        <section className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col gap-4">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">Generated Art</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden shadow transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
