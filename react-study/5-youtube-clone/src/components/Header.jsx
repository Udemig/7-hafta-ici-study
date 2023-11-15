import { Link, useNavigate } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiFillBell,
  AiFillVideoCamera,
} from 'react-icons/ai';

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    // kullanıcyı arama sonuöşarı sayfasına
    // yönlendirme
    navigate(`/results?search_query=${query}`);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link to={'/'} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" />
        <h1 className="text-2xl hidden md:block">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px] "
      >
        <input
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="search"
        />

        <button className="grid place-items-center border-l px-2 h-full text-xl">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <AiFillBell />
        <AiFillVideoCamera />
      </div>
    </header>
  );
};

export default Header;
