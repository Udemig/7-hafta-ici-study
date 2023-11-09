import { categories } from './../constants/index';

import { useContext } from 'react';
import { YoutubeContext } from './../context/youtubeContext';

const SideBar = () => {
  // context'ten sağlanan verilere erişme
  const { selectedCategory, setSelectedCategory } =
    useContext(YoutubeContext);

  return (
    <div className="flex flex-col px-2 md:px-4">
      {categories.map((item) => (
        <div
          onClick={() => setSelectedCategory(item)}
          key={item.name}
        >
          <div
            // eğerki ekrana bastığımız kategori seçili ise arkaplan ver
            style={{
              background:
                selectedCategory.name === item.name && '#2d2d2d',
            }}
            className="flex items-center gap-2 py-4 px-2 md:px-3  md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]"
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>

          {/* item'in divider'değeri true ise çizgi bas */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
