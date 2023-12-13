import './style.scss';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLanguages,
  translateText,
} from './redux/translateActions';
import Select from 'react-select';
import { setTranslated } from './redux/translateSlice';

const App = () => {
  const state = useSelector((store) => store.translate);
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [sourceLang, setSourceLang] = useState({
    label: 'Turkish',
    value: 'tr',
  });
  const [targetLang, setTargetLang] = useState({
    label: 'English',
    value: 'en',
  });

  // dil verilerini alır ve store'a aktarır
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  // api'dan gelen dizi içerisndeki {code ve name} değerlerine
  // sahip objeleri {label ve value} değerlerine sahip
  // objelere çevirme. ancak buradaki map  top-level code olduğu
  // için bileşen her render edildiğinde tekrardan çalışır.
  // bunu önlemek için useMemo kullandık.
  const refinedData = useMemo(
    () =>
      state.languages.map((lang) => ({
        label: lang.name,
        value: lang.code,
      })),
    [state.languages]
  );

  // dilleri değiş
  const handleSwap = () => {
    setTargetLang(sourceLang);
    setSourceLang(targetLang);

    // alt inputtaki veriyi üsttekini aktar
    setText(state.translatedText);

    // üst inputtaki veriyi alt takine yani store'a aktar
    dispatch(setTranslated(text));
  };

  return (
    <div id="main-page">
      <div className="container">
        <h1>Çeviri +</h1>
        {/* üst kısım */}
        <div className="upper">
          <Select
            className="select"
            onChange={setSourceLang}
            isLoading={state.isLangsLoading}
            isDisabled={state.isLangsLoading}
            options={refinedData}
            value={sourceLang}
          />
          <button onClick={handleSwap}>Değiş</button>
          <Select
            className="select"
            onChange={setTargetLang}
            isLoading={state.isLangsLoading}
            isDisabled={state.isLangsLoading}
            options={refinedData}
            value={targetLang}
          />
        </div>
        {/* orta kısım */}
        <div className="middle">
          <div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            {state.isTranslateLoading && (
              <ul class="wave-menu">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            )}
            <textarea value={state.translatedText} disabled />
          </div>
        </div>
        {/* üst kısım */}
        <button
          onClick={() =>
            dispatch(translateText({ sourceLang, targetLang, text }))
          }
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default App;
