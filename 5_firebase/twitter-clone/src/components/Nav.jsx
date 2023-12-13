import { navSections } from '../constant';

const Nav = () => {
  return (
    <div className="flex flex-col justify-between items-end px-2 py-4">
      {/* linkler */}
      <div>
        <img className="w-14 mb-4" src="x-logo.webp" alt="logo" />

        {navSections.map((i) => (
          <div className="flex justify-center md:justify-normal items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer transition rounded-lg hover:bg-[#505050b7]">
            {i.icon}
            <span className="max-md:hidden whitespace-nowrap">
              {i.title}
            </span>
          </div>
        ))}
      </div>

      {/* kullanıcı bilgileri */}
    </div>
  );
};

export default Nav;
