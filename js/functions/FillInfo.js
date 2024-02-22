import {data} from '../data/AboutMe.js';
import {PInfo} from '../components/p-info.js';
import {AboutMe} from '../components/about-me.js';

const attributesP = new PInfo();

const aboutMeE = new AboutMe();


const aside = document.querySelector('aside');

aboutMeE;

aside.attachShadow(aboutMeE);

console.log(aside);
console.log(aboutMeE);



/*
const observerMainT = new MutationObserver( (mutations)=>{
    mutations.forEach( (mutation)=>{
            if (mutation.type === "attributes") {
                console.log("attributes changed");

                // Example of accessing the element for which 
                // event was triggered
                mutation.target.ATTRIBUTE_NODE = "Lo que hago";
            }
                console.log(mutation.target);
        }

    );
});
*/

//Configure the observer (e.g., watch for attribute changes)
//const config = { attributes: true, attributeOldValue: true, CharacterData: true };



//const infoP = document.getElementById('infoPrincipal');

//Start observing
//observerMainT.observe(aboutMeE, config);

/*
if(aboutMeE.attributes.length > 0){
    const message = aboutMeE.setAttributeNS('', 'maintitle','loquehago');
    

    console.log(message);
}*/
//aboutMeE.childNodes();// setAttribute('', 'Lo que hago');


//const infoAbout = aboutMeE.childNodes.item(4);

//infoP.setAttribute('titleInfo', 'hola');
//console.log(aboutMeE);
//console.log(infoP);


//console.log(infoAbout);


