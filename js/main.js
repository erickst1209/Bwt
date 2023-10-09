const inicio = document.querySelector('#menu')

const subriAlInicio = () =>{
    window.scroll({
        top:0,
        left: 0 ,
        behavior:'smooth'
    });
}

inicio.addEventListener('click',()=>{
    subriAlInicio();
})

