import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      });
  }, []);
  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Countries Data</h1>
        <p className="text-gray-100 text-xl mb-8">
          Click on a card to reveal a country's information.
        </p>
      </div>
    </div>
  );
}

export default App;
