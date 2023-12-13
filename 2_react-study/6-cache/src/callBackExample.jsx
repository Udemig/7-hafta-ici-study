import React, { useCallback, useState } from "react";
import Button from "./Button.jsx";

const CallBackExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // fonksiyonu cache'e alma (hafızada tutuma)
  // her render sırasında yeni fonk. oluşturmak yerine
  // dah önce oluşturdğu fonk. hafızay atar ve onu getirir
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>{count}</p> 
      <p>{name}</p>
      <Button count={count} handleClick={handleClick} />
      <br />
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default CallBackExample;
