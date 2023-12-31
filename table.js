import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Table.css';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Table = ({ data, itemsPerPage, onPageChange }) => {
  const [sortedField, setSortedField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterValue, setFilterValue] = useState('');
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    updateFilteredData();
  }, [currentPage, sortDirection, sortedField, filterValue]);

  const handleSort = (field) => {
    if (field === sortedField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortDirection('asc');
    }
    setCurrentPage(0);
  };

  const handleFilter = (event) => {
    const inputValue = event.target.value;
    setFilterValue(inputValue);
    setCurrentPage(0);
  };

  const updateFilteredData = () => {
    let filteredData = data;

    if (filterValue) {
      filteredData = data.filter((item) =>
        item.regId.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (sortedField) {
      filteredData.sort((a, b) => {
        const aValue = a[sortedField];
        const bValue = b[sortedField];
        if (sortDirection === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
    }

    setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredAndSortedData(filteredData.slice(startIndex, endIndex));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <main className="list-queue">
      <section className="table-header">
        <div className="table-heading">
          <h1>Loan History</h1>
        </div>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Reg ID..."
            onChange={handleFilter}
            value={filterValue}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </section>
      <section className="table-body">
        <table className="table">
          <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('regId')}>Reg ID</th>
              <th onClick={() => handleSort('loanAmount')}>Loan Amount</th>
              <th onClick={() => handleSort('loanType')}>Loan Type</th>
              <th onClick={() => handleSort('annualIncome')}>Annual Income</th>
              <th onClick={() => handleSort('requestDate')}>Request Date</th>
              <th onClick={() => handleSort('status')}>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((item, index) => (
              <tr key={index}>
              <td>{item.name}</td>
              <td>{item.regId}</td>
              <td>{item.loanAmount}</td>
              <td>{item.loanType}</td>
              <td>{item.annualIncome}</td>
              <td>{item.requestDate}</td>
              <td className={`status-cell status_${item.status.toLowerCase()}`}>
                <p className={`status_delivered ${item.status.toLowerCase()}`}>
                  {item.status}
                </p>
              </td>
              <td><FontAwesomeIcon icon={faEdit} /></td>
            </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakClassName={'break-me'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageCount={totalPages}
          forcePage={currentPage}
        />
      </section>
    </main>
  );
};

export default Table;
