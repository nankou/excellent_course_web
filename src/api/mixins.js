import {getData} from "./net";

export const  netMixin ={
  methods: {
    request(data,actionName,success,fail){
      let count = 1
      return getData(data,actionName).then(resp => {
        if (success){
          success(resp)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
