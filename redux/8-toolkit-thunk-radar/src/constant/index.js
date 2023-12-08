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
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};

export const options2 = {
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};
