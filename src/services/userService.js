import axios from 'axios'
const BaseUrl=`http://fundoonotes.incubation.bridgelabz.com/api`
export function register(data){
return axios.post(BaseUrl+'/user/userSignUp',data)
}
export function login(data){
    return axios.post(BaseUrl+'/user/login',data)
}
export function resetpassword(data){
    return axios.post(BaseUrl+'/user/reset-password',data,{
        headers:{
            Authorization:localStorage.getItem("token")
        }

    })
}