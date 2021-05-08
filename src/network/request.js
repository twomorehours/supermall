import axios from 'axios';

export default function request(config){
  const cli = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  cli.interceptors.response.use(res => res.data, err => console.log(err));
  
  return cli(config);
};
