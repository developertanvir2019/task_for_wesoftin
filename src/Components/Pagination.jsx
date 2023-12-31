/* eslint-disable react/prop-types */
const Pagination = ({ pageNumber, setPageNumber }) => {
  const handlePageClick = (page) => {
    setPageNumber(page);
  };

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNumber < 10) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="flex justify-center space-x-4 dark:text-gray-100">
      <button
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        onClick={handlePrevClick}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {Array.from({ length: 10 }, (_, index) => (
        <button
          key={index}
          type="button"
          title={`Page ${index + 1}`}
          className={`inline-flex items-center justify-center w-10 h-10 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400 ${
            pageNumber === index + 1 ? "bg-black text-white" : ""
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        onClick={handleNextClick}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
