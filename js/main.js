let allh1 =document.querySelectorAll('h1')
let btn =document.querySelector('.btnch')
let alldiv =document.querySelectorAll('div')
let allp =document.querySelectorAll('p')
let navul =document.querySelectorAll('ul')


btn.onclick= function (){
    if(document.body.style.background =='transparent'){
        document.body.style.background ='black'
        for(let i=0; i < allh1.length;i++){
            allh1[i].style.color='#3e4450'
        }
        for(let d=0; d<alldiv.length;d++){
            alldiv[d].style.background='black'
        }
        for(let pp=0; pp<allp.length;pp++){
            allp[pp].style.color='white'
        }
        for(let uu=0; uu<navul.length;uu++){
            navul[uu].style.background='black'
        }
    }else{
        document.body.style.background ='transparent'
        for(let i=0; i<allh1.length;i++){
            allh1[i].style.color='#444'
        }
        for(let d=0; d<alldiv.length;d++){
            alldiv[d].style.background='#f9f9fa'
        }
        for(let pp=0; pp<allp.length;pp++){
            allp[pp].style.color='#444'
        }
        for(let uu=0; uu<navul.length;uu++){
            navul[uu].style.background='white'
        }
    }
   
}
