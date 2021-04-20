import axios from 'axios'
import {serverPath} from "./config";

export  function getData(data,action) {
  return axios.get(serverPath+"/"+action,{
    params:data
  }).then(resp => {
    console.log("resp.data"+resp.data.code)
    return Promise.resolve(resp.data.data)
  })
}
