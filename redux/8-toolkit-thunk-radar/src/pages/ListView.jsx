import axios from 'axios';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

const ListView = ({ openModal }) => {
  const state = useSelector((store) => store.flight);

  // gösterilcek ilk elemanın dizisdekş sırası
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına eleman sayısı
  const itemsPerPage = 10;

  // gösterilecek sonuncu elemanın dizideki yeri
  const endOffset = itemOffset + itemsPerPage;

  // belirlenen aralıkta elemanları seçme
  const currentItems = state.flights.slice(itemOffset, endOffset);

  // toplam sayfa sayısnı bulma
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);

  // her yeni sayfa seçtiğinde bunu state' aktarır
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;

    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-hover mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => openModal(flight.id)}>
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        className="pagination"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< geri"
      />
    </div>
  );
};

export default ListView;
