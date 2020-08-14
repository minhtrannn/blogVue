import request from '@/utils/request';
import Cookies from 'js-cookie';

export function getUserInfor()
{
    return request.get('http://systemjwt.beta/api/userInfor', 
    {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function updateInforUser(name, email, password)
{
    return request.post('http://systemjwt.beta/api/updateInfor', {
        name: name, 
        email: email,
        password: password
    },
    {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        }
    }).catch((err) => {
        console.log(err);
    })
}