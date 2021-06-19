import axios from 'axios';

// https://api.hgbrasil.com/weather?key=19d99ca1&lat=-23.682&lon=-46.875

export const key = 'd91d8408';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;