//____________________________________________________________
const _contactpage=(content)=>{                                 //|
                                                                //|
//________________________________________________              //|
const div=document.createElement('div');        //|             //|
div.classList.add('contact');                   //|             //|
content.appendChild(div);                       //|             //|
                                                //|             //|
                                                //|             //|
const opening=document.createElement('div');    //|             //|
opening.classList.add('opening');               //|             //|
opening.classList.add('box');                   //|             //|
div.appendChild(opening);                       //|             //|
                                                //|             //|
const oppH3=document.createElement('h3');       //|             //|
oppH3.innerHTML='Opening'                       //|             //|
opening.appendChild(oppH3);                     //|             //|
                                                //|             //|
const oppP=document.createElement('p');         //|             //|
oppP.innerHTML='Friday 6 pm <br> Suterday 6 pm <br> Sunday 6 pm'
opening.appendChild(oppP);                      //|             //|
//______________________________________________//|             //|
                                                                //|
//______________________________________________                //|
const number=document.createElement('div');   //|               //|
number.classList.add('number');               //|               //|
number.classList.add('box');                  //|               //|
div.appendChild(number);                      //|               //|
                                              //|               //|
const numH3=document.createElement('h3');     //|               //|
numH3.innerHTML='Contact'                     //|               //|
number.appendChild(numH3);                    //|               //|
                                              //|               //|
const numP=document.createElement('p');       //|               //|
numP.innerHTML='Reservation Only <br>'        //|               //|
number.appendChild(numP);                     //|               //|
//____________________________________________//|               //|
                                              //|               //|
//________________________________________________              //|
const adress=document.createElement('div');    //|              //|
adress.classList.add('adress');                //|              //|
adress.classList.add('box');                   //|              //|
div.appendChild(adress);                       //|              //|
                                               //|              //|
const adH3=document.createElement('h3');       //|              //|
adH3.innerHTML='Adress'                        //|              //|
adress.appendChild(adH3);                      //|              //|
                                               //|              //|
const adP=document.createElement('p');         //|              //|
adP.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
adress.appendChild(adP);                       //|              //|
//_____________________________________________//|              //|
}                                                               //|
//______________________________________________________________//|


//________________________________________________
const _removeContact=()=>{                         //|
    const temp=document.querySelector('.contact');  //|
    temp.remove()                                //|
}                                               //|
//______________________________________________//|

export {_contactpage,_removeContact}