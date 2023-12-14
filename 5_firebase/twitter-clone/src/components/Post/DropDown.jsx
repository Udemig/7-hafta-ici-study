import React from 'react';

const DropDown = ({ handleDelete }) => {
  return (
    <label class="popup">
      <input type="checkbox" />
      <div class="burger" tabindex="0">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="popup-window">
        <legend>Eylemler</legend>
        <ul>
          <li>
            <button>
              <img src="/edit.svg" />
              <span>Düzenle</span>
            </button>
          </li>
          <hr />
          <li>
            <button onClick={handleDelete}>
              <img src="/delete.svg" />
              <span>Kaldır</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
};

export default DropDown;
