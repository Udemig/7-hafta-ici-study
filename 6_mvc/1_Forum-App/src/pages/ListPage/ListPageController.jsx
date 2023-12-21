import { useEffect, useState } from 'react';
import ListPageView from './ListPageView';
import Model from './ListPageModel';

// COntroller bileşinide kullanıcı etkileşmi ile tetikelen fonksiyonlar / state tutulur
const ListPageController = () => {
  const [posts, setPosts] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  // useEffect ile'de kullanıcı etikleimi izlediğimiz için controller'da tanımladık
  useEffect(() => {
    Model.getPosts().then((data) => setPosts(data));
  }, []);

  // Controller bileşeninde arayüz  (jsx kodu) yazmayız
  // View bileşnini döndürürz
  return (
    <ListPageView
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      posts={posts}
    />
  );
};

export default ListPageController;
