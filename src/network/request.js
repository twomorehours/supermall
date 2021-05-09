import axios from 'axios';

export default function request(config){
  const cli = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });

  cli.interceptors.response.use(res => res.data, err => console.log(err));

  return cli(config);
};
