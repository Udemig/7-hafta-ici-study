// tarihi alır ve geriye gün / ay döndürür
export const formatDate = (dateStr) => {
  // date methodlarını kullanabilmek için
  // elemizdeki tarih ile date objesi oluşturma
  const date = new Date(dateStr);

  //   formatlayıp geri döndürme
  return date.getDate() + '/' + (date.getMonth() + 1);
};
