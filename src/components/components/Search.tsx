import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="p-2 flex items-center space-x-2">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleKeyUp}
        className="border rounded-l-md py-2 px-4 w-full placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300 flex"
      >
        Buscar <RiSearchLine className='text-2xl' />
      </button>
    </div>
  );
};

export default Search;
