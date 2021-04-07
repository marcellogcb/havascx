
let teste = {}
let resultado1 = document.querySelector(".resultado1")
let botao1 = document.querySelector(".view1");
botao1.addEventListener('click',function(){
    let url="https://jsonplaceholder.typicode.com/posts"
    let xhr= new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status = 200){
                teste = JSON.parse(xhr.responseText)
                // console.log(JSON.parse(xhr.responseText))
            }

        }
    }
    xhr.send()
    for(let i = 0; i < teste.length; i++){
        let div = document.createElement('div')
        div.classList.add('artigo')
        let h2 = document.createElement('h2')
        h2.classList.add('h2')
        let h1 = document.createElement('h1')
        h1.classList.add('id')
        let h3 = document.createElement('h3')
        h3.classList.add('title')
        let p = document.createElement('p')
        p.classList.add('bodyview')
        let button = document.createElement('button')
        button.classList.add('lermais')
        button.setAttribute('data-title', teste[i].title)
        button.setAttribute('data-body', teste[i].body)
        button.setAttribute('id', teste[i].id)
        button.setAttribute('onclick', 'showModal(' + teste[i].id + ')')
        h2.innerHTML = teste[i].userId
        h1.innerHTML = teste[i].id
        h3.innerHTML = teste[i].title
        p.innerHTML = teste[i].body
        button.innerHTML = 'View 2'
        div.appendChild(h2)
        div.appendChild(h1)
        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(button)
        resultado1.appendChild(div)
    }
});

function showModal(id) {
    const modal = document.getElementById('post')
    let button = document.getElementById(id)
    let title = button.dataset.title
    let body = button.dataset.body
    if (modal) {
        document.querySelector('.modal-title').innerHTML = title
        document.querySelector('.modal-body').innerHTML = body
        modal.classList.add('show');
        modal.addEventListener('click', (e) => {
            if ((e.target.id == 'post' )) {
                modal.classList.remove('show')
            }
        })
    }
}