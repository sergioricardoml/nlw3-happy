import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seu_endereço_Expo_(IP)_aqui_com_:3333_no_final'
})

export default api;