export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.596201',
    bl_lng: '25.826312',
    tr_lat: '43.693244',
    tr_lng: '44.822849',
    limit: '300',
  },
  headers: {
    'X-RapidAPI-Key':
      '554b5c9a03msh4a008333f18e61ap1fb405jsnbaa4227abd20',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};

export const options2 = {
  headers: {
    'X-RapidAPI-Key':
      '554b5c9a03msh4a008333f18e61ap1fb405jsnbaa4227abd20',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};
