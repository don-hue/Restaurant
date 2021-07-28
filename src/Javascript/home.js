//_______________Home Page________________________________________
const _homepage=(content)=>{                                    //|  
                                                                //|
//________________________________________________              //|
    const h2=document.createElement('h2');      //|             //|
    h2.classList.add('HomeH2');                 //|             //|
    h2.innerHTML='Welcome to your Taj Mahal'    //|             //|
    content.appendChild(h2);                    //|             //|
//______________________________________________//|             //|
                                                                //|
                                                                //|
//____________________________________________________          //|
    const images=document.createElement('div');     //|         //|
    images.classList.add('images')                  //|         //|
    content.appendChild(images)                     //|         //|
                                                    //|         //|     
    const img1=document.createElement('img');       //|         //|
    img1.classList.add('MichelinStar')              //|         //|
    img1.src='/src/SASS/Images/michilinstar.png';   //|         //|
    images.appendChild(img1)                        //|         //|
                                                    //|         //|
    const img2=document.createElement('img');       //|         //|
    img2.classList.add('MichelinStar')              //|         //|
    img2.src='/src/SASS/Images/michilinstar.png';   //|         //|
    images.appendChild(img2);                       //|         //|
                                                    //|         //|
    const img3=document.createElement('img');       //|         //|
    img3.classList.add('MichelinStar')              //|         //|
    img3.src='/src/SASS/Images/michilinstar.png';   //|         //|
    images.appendChild(img3);                       //|         //| 
}                                                   //|         //|     
//__________________________________________________//|         //|
                                                                //|
//______________________________________________________________//|


//__________________________________________________
const _removeHomepage=()=>{                       //|
    const h2=document.querySelector('.HomeH2');   //|
    const images=document.querySelector('.images')//|
    h2.remove();                                  //|
    images.remove();                              //|
                                                  //|
}                                                 //|
//________________________________________________//|

export {
    _homepage,
    _removeHomepage,
}