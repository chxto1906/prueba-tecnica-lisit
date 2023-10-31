import React, { useState } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="p-2 flex items-center space-x-2">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-md p-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white rounded-md p-2">
        Buscar
      </button>
    </div>
  );
};

export default Search;
