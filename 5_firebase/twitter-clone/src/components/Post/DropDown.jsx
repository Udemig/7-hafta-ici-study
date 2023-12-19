import React, { useRef } from 'react';
import { ref } from 'firebase/storage';

const DropDown = ({ handleDelete, setIsEditMode }) => {
  const checkboxRef = useRef();

  return (
    <label class="popup">
      <input ref={checkboxRef} type="checkbox" />
      <div class="burger" tabindex="0">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="popup-window">
        <legend>Eylemler</legend>
        <ul>
          <li>
            <button
              onClick={() => {
                setIsEditMode(true);
                // inputun checked değerini false'a
                // çekicez menünün kapanması için
                checkboxRef.current.checked = false;
              }}
            >
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
