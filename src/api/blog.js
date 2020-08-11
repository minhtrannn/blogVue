import request from '@/utils/request';
import Cookies from 'js-cookie';

export function getAllBlog(){
    return request.get('http://systemjwt.beta/api/post', 
    {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function createBlog(title, body)
{
    return request.post('http://systemjwt.beta/api/createPost',
    {
        title: title,
        body: body
    },
    {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function updateBlog(title, body, id)
{
    return request.post('http://systemjwt.beta/api/updatePost/' + id,
    {
        title: title,
        body: body
    },
    {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function deleteBlog(id)
{
    return request.delete('http://systemjwt.beta/api/deletePost/' + id,
    {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        }
    }).catch((err) => {
        console.log(err);
    })
}