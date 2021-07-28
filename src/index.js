import './SASS/main.scss';
import { _homepage, _removeHomepage} from './Javascript/home.js';
import {_menupage, _removeMenu} from './Javascript/menu.js';
import { _contactpage, _removeContact} from './Javascript/contact.js';

//____________________Main Div________________
const content=document.createElement('div');//|
content.classList.add('Content');           //|
document.body.appendChild(content);         //|
//____________________________________________|

//____________________Nav-Bar_________________
const nav=document.createElement('nav');    //|
nav.classList.add('NavBar');                //|
content.appendChild(nav);                   //|
//____________________________________________|


//______________________li Element/NavBar_________
                                                //|
const home=document.createElement('button');    //|
home.classList.add('Home');                     //|
home.classList.add('Button');                   //|
home.innerHTML='Home';                          //|
nav.appendChild(home);                          //|
                                                //|
const menu=document.createElement('button');    //|
menu.classList.add('Menu');                     //|
menu.classList.add('Button');                   //|
menu.innerHTML='Menu';                          //|
nav.appendChild(menu);                          //|
                                                //|
const contact=document.createElement('button'); //|
contact.classList.add('Contact');               //|
contact.classList.add('Button');                //|
contact.innerHTML='Contact';                    //|
nav.appendChild(contact);                       //|
//________________________________________________|

//____________________________________________
const array=['Home','Menu','Contact']       //|
let currentPage=0                           //|
//__________________________________________//|

_homepage(content)
//________________________________________________
home.addEventListener('click', function(){
    if (currentPage==1){
        _removeMenu();
        _homepage(content)
        currentPage=0;
    }

    if (currentPage==2){
        _removeContact();
        _homepage(content)
        currentPage=0;
    }
    
});

menu.addEventListener('click', function(){      //|
    if (currentPage==0){
        _removeHomepage();
        _menupage(content)
        currentPage=1;
    }

    if (currentPage==2){
        _removeContact();
        _menupage(content)
        currentPage=1;
    }
});



contact.addEventListener('click', function(){
    if (currentPage==0){
        _removeHomepage();
        _contactpage(content);
        currentPage=2
    }

    if (currentPage==1){
        _removeMenu();
        _contactpage(content)
        currentPage=2;
    }
 });