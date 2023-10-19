import Card from './Card';

const List = () => {
  // karlatı için veri
  const data = [
    {
      image: 'https://picsum.photos/600/500',
      category: 'Doğa',
      title: 'Doğa ile İnsan',
      theme: 'dark',
    },
    {
      image: 'https://picsum.photos/600/501',
      category: 'Teknoloji',
      title: 'Teknoloji Harikası',
      fromNow: '5 ay önce',
    },
    {
      image: 'https://picsum.photos/600/502',
      category: 'Seyahat',
      title: 'Keşfedilmemiş Yerler',
    },
    {
      image: 'https://picsum.photos/600/503',
      category: 'Sanat',
      title: 'Sanatın İzleri',
    },
    {
      image: 'https://picsum.photos/600/504',
      category: 'Müzik',
      title: 'Sesin Büyüsü',
      theme: 'dark',
      fromNow: '9 ay önce',
    },
    {
      image: 'https://picsum.photos/600/505',
      category: 'Spor',
      title: 'Sporun Tutkusu',
    },
    {
      image: 'https://picsum.photos/600/506',
      category: 'Bilim',
      title: 'Bilimsel Keşifler',
      theme: 'dark',
    },
    {
      image: 'https://picsum.photos/600/507',
      category: 'Gastronomi',
      title: 'Lezzet Yolculuğu',
    },
    {
      image: 'https://picsum.photos/600/508',
      category: 'Moda',
      title: 'Moda Trendleri',
      fromNow: '10 yıl önce',
    },
    {
      image: 'https://picsum.photos/600/509',
      category: 'Eğitim',
      title: 'Öğrenme Macerası',
    },
  ];

  //* dizideki her bir obje için ekrana bir kart bileşeni basma
  //* ve gerekli prop'ları gönderme
  const cardList = data.map((i) => <Card item={i} />);

  return <div id="wrapper">{cardList}</div>;
};

export default List;
