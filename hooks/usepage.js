import React,{ useState } from "react";

const usePage = (docs, docsPerPage = 6) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(docs.length / docsPerPage);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const displayedDocs = docs.slice(
        (currentPage - 1) * docsPerPage,
        currentPage * docsPerPage
    );

    const Pagination = () => (
        <nav className="flex justify-center">
            <ul className="flex">
                {[...Array(totalPages).keys()].map((pageNumber) => (
                    <li key={pageNumber}>
                        <button
                            className={`py-2 px-4 rounded-l rounded-r-none focus:outline-none ${pageNumber + 1 === currentPage
                                    ? "bg-gray-400 text-white"
                                    : "bg-white text-gray-800 hover:bg-gray-200"
                                }`}
                            onClick={() => onPageChange(pageNumber + 1)}
                        >
                            {pageNumber + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );

    return { displayedDocs, Pagination };
};

export default usePage;
