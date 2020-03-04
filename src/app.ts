import axios, { AxiosResponse } from 'axios'


let ResponseAxios: any;

const ListaPrincipal=document.getElementById('listaPrincipal');

async function axiosGet() {


    await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1/comments'
    }).then((data) => { ResponseAxios = data }).catch(console.log)


    console.log(ResponseAxios.data)

    ResponseAxios.data.forEach((dato:any) => {

        const li = document.createElement('li');
        li.innerText=dato.body;

        ListaPrincipal?.appendChild(li)


        
        
    });

}


axiosGet();