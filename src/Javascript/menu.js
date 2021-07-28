
//____________________________________________________________
const _menupage=(content)=>{                                //|
                                                            //|
    //________________________________________________      //|
    const div=document.createElement('div');        //|     //|
    div.classList.add('menu');                      //|     //|
    content.appendChild(div);                       //|     //|
                                                    //|     //|
                                                    //|     //|
    const appetizer=document.createElement('div');  //|     //|
    appetizer.classList.add('appetizer');           //|     //|
    appetizer.classList.add('box');                 //|     //|
    div.appendChild(appetizer);                     //|     //|
                                                    //|     //|
    const appH3=document.createElement('h3');       //|     //|
    appH3.innerHTML='Appetizer'                     //|     //|
    appetizer.appendChild(appH3);                   //|     //|
                                                    //|     //|
    const appP=document.createElement('p');         //|     //|
    appP.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    appetizer.appendChild(appP);                    //|     //|
    //______________________________________________//|     //|
                                                            //|
    //________________________________________________      //|
    const mainmenu=document.createElement('div');   //|     //|
    mainmenu.classList.add('mainmenu');             //|     //|
    mainmenu.classList.add('box');                  //|     //|
    div.appendChild(mainmenu);                      //|     //|
                                                    //|     //|
    const mainH3=document.createElement('h3');      //|     //|
    mainH3.innerHTML='Main'                         //|     //|
    mainmenu.appendChild(mainH3);                   //|     //|
                                                    //|     //|
    const mainP=document.createElement('p');        //|     //|
    mainP.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    mainmenu.appendChild(mainP);                    //|     //|
    //______________________________________________//|     //|
                                                    //|     //|
    //________________________________________________      //|
    const dessert=document.createElement('div');    //|     //|
    dessert.classList.add('dessert');               //|     //|
    dessert.classList.add('box');                   //|     //|
    div.appendChild(dessert);                       //|     //|
                                                    //|     //|
    const desH3=document.createElement('h3');       //|     //|
    desH3.innerHTML='Dessert'                       //|     //|
    dessert.appendChild(desH3);                     //|     //|
                                                    //|     //|
    const desP=document.createElement('p');         //|     //|
    desP.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    dessert.appendChild(desP);                      //|     //|
    //______________________________________________//|     //|
}                                                           //|
//__________________________________________________________//|


//________________________________________________
const _removeMenu=()=>{                         //|
    const div=document.querySelector('.menu');  //|
    div.remove()                                //|
}                                               //|
//______________________________________________//|


export {_menupage, _removeMenu}