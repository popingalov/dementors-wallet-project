import axios from 'axios';

axios.defaults.baseURL = 'https://dementrors-waller.herokuapp.com/api';

export async function fetchTransactions() {
  const { data } = await axios.get('/transactions');
  console.log('aaaa', data);
  return data;
}

export async function addTransaction(contact) {
  const { data } = await axios.post('/transactions', contact);
  return data;
}
