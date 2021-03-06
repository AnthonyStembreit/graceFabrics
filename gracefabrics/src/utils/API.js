import axios from 'axios';

const API = {

  login: function (credentials) {
    return axios.post('/api/login', credentials);
  },
  forgotPassword: function(email){
    return axios.post('/api/forgot-password', email)
  },
  resetPassword: function(tokenEmail){
    return axios.post('/api/reset-password', tokenEmail)
  },
  updatePassword: function(updatedPass){
    return axios.post('/api/update-password', updatedPass)
  },
  authenticate: function(){
    return axios.get('/api/check-authenticate')
  },
  logout: function () {
    return axios.get('/api/logout');
  },
  getProducts: function () {
    return axios.get('/api/products');
  },
  getSortedStoles: function (props) {
    let stoleName = props;
    return axios.get(`/api/products/${stoleName}`);
  },
  updateItem: function (event) {
    let product = event.currentTarget.value;
    return axios.put(`/api/admin/products`, JSON.parse(product));
  },
  deleteProduct: function (event) {
    let deletion = event.currentTarget.value
    return axios.post(`/api/delete`, JSON.parse(deletion));
  },
  createProduct: function (event) {
    let products = event.currentTarget.value;
    return axios.post('/api/create', JSON.parse(products));
  },
}
export default API;