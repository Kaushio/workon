let navbar =document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').oneclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}
document.querySelector('input[type="number"]').forEach(Inputnumber =>{
    Inputnumber.oninput = () =>{
        if(Inputnumber.value.length > Inputnumber.maxlength) Inputnumber.value
        =Inputnumber.value.slice(0 , Inputnumber.maxlength);
    };

})
    
