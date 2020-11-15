import axios from 'axios';

const API = {

  login: function(credentials) {
    return axios.post('/api/login', credentials);
  },
  logout: function() {
    return axios.get('/api/logout');
  },
  getProducts: function() {
    return axios.get('/api/products');
  },
  getProductsById: function(id) {
    return axios.get('/api/' + id)
  },
  getAdmin: function() {
    return axios.get('/api/admin')
  },
  getAlters: function() {
    return axios.get('/api/products/alter')
  },
  getStoles: function() {
    return axios.get('/api/products/stoles')
  },
  getChristmasStoles: function() {
    return axios.get('/api/products/christmas-stoles')
  },
  getRainbowStoles: function() {
    return axios.get('/api/products/rainbow-stoles')
  },
  getEasterStoles: function() {
    return axios.get('/api/products/easter-stoles')
  },
  getPentecostStoles: function() {
    return axios.get('/api/products/pentecost-stoles')
  },
  getLentenStoles: function() {
    return axios.get('/api/products/lenten-stoles')
  },
  getAdventStoles: function() {
    return axios.get('/api/products/advent-stoles')
  },
  getBanners: function() {
    return axios.get('/api/products/banners')
  }
}
export default API;