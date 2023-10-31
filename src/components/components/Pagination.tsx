import React from 'react';

interface PaginationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ onPrevious, onNext, hasPrevious, hasNext }) => {
  return (
    <div className="flex justify-between mt-4 p-2">
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`${
          hasPrevious ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400'
        } text-white px-4 py-2 rounded-md`}
      >
        Anterior
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`${
          hasNext ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400'
        } text-white px-4 py-2 rounded-md`}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
