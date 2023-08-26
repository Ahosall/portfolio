import axios from 'axios';

const endpoint = "https://api.github.com"

const Api = {
  user: axios.get(endpoint + '/users/ahosall').then(res => res.data).catch(() => null),
  repos: axios.get(endpoint + '/users/ahosall/repos?visibility=public&sort=pushed&per_page=100').then(res => res.data).catch(() => null)
}

export default Api