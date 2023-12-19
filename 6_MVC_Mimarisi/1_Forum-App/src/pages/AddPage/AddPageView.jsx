import React from 'react';

const AddPageView = ({ handleSubmit }) => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-3/4 max-w-[700px] bg-black p-10 md:p-20 rounded-lg"
      >
        <h1 className="text-center text-xl">Yeni Gönderi Oluştur</h1>

        <div className="flex flex-col gap-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Kullanıcı Adı
          </label>
          <input
            name="user"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Mehmet"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Başlık
          </label>
          <input
            name="title"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="React Nedir?"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Açıklama
          </label>
          <textarea
            name="text"
            type="text"
            className="min-h-[150px] max-h-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 p-2 rounded-lg transition hover:bg-yellow-600"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default AddPageView;
