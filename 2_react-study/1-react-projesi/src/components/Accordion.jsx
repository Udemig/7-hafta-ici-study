import { useState } from 'react';

// birde fazla prop göndmerildiği durumlarda bunu tercih ediyoruz
// her yere prop.degerIsmı yazmak yerine degerIsimlerine dorudan erişiyoruz
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="acor">
      <div className="upper">
        <h3>{title}</h3>
        {/* butona tıklandığınd aisOPen değeri tersine dönsün */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {/* is open değeri true ise alt kısmı göster değilse gösterme */}
      {isOpen && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
