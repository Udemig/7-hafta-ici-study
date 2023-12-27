import { useState } from 'react';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="mt-5 my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        className="form-check-input"
        type="checkbox"
      />

      <div className="terms-box">
        <p style={{ visibility: isHover ? 'visible' : 'hidden' }}>
          Size gerçekten bir şey yeslim etmeyeceğiz
        </p>

        <label htmlFor="terms">
          Koşulları okudum ve kabul ediyorum
        </label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="btn btn-primary"
        disabled={!isChecked}
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
