const template = document.createElement('template');

template.innerHTML = `
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.profile-container{
    background-color: black;
    color: white;
    width: 450px;
    height: 600px;
    display: block;
    justify-content: center;
    font-size: 2rem;
    border-radius: 15px;
    border: solid ;
}

img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 3px 2px 20px teal;
    margin: 10px;
}

img:hover{
    zoom: 125%;
}

#info-person{
    display: block;
    margin: 30px;
}

#name-person{
    font-size: 4rem;
}

#profession{
    margin-left: 80px;
}

#social-media{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}

#info-cv{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

a:link{
    border: solid white;
    border-radius: 25px;
    padding: 8px;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
}

a:hover{
    background-color: #6DA5C0;
}

footer{
    margin-top: 80px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
}

figure{
    display: flex;
    align-items: center;
    justify-content: center;
}

figcaption{
    display: none;
}

</style>

<div class="profile-container">
    <figure>
        <img/>
        <figcaption></figcaption>
    </figure>
    <section id="info-person">
        <span id="name-person"></span>
        <span id="profession"></span>
    </section>
    <section id="social-media">
        <slot name="one-network"></slot>
        <slot name="two-network"></slot>
        <slot name="three-network"></slot>
    </section>
    <section id="info-cv">
        <a id="btn-download-cv" download>Descargar CV</a>
    </section>
    <footer></footer>
</div>
`;

class InfoProfile extends HTMLElement {
    static get observedAttributes(){
        return ['srcImg', 'infoImg', 'namePerson', 'profPerson', 'srcFile', 'copyright']; 
    }

    set srcImg(value){
        if(value){
            this.setAttribute('srcImg', value);
        }else{
            this.removeAttribute('srcImg');
        }
    }

    get srcImg(){
        return this.getAttribute('srcImg');
    }

    set infoImg(value){
        if(value){
            this.setAttribute('infoImg', value);
        }else{
            this.removeAttribute('infoImg');
        }
    }

    get infoImg(){
        return this.getAttribute('infoImg');
    }

    set namePerson(value){
        if(value){
            this.setAttribute('namePerson', value);
        }else{
            this.removeAttribute('namePerson');
        }
    }

    get namePerson(){
        return this.getAttribute('namePerson');
    }

    set profPerson(value){
        if(value){
            this.setAttribute('profPerson', value);
        }else{
            this.removeAttribute('profPerson');
        }
    }

    get profPerson(){
        return this.getAttribute('profPerson');
    }

    set srcFile(value){
        if(value){
            this.setAttribute('srcFile', value);
        }else{
            this.removeAttribute('srcFile');
        }
    }

    get srcFile(){
        return this.getAttribute('srcFile');
    }

    set copyright(value){
        if(value){
            this.setAttribute('copyright', value);
        }else{
            this.removeAttribute('copyright');
        }
    }

    get copyright(){
        return this.getAttribute('copyright');
    }

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.assignImg();

        this.assignFigcaption();

        this.assignName();

        this.assignProfession();

        this.assignEducation();

        this.assignCopyright();

    }

    assignImg(){
        //WE passed the class of <img> tag.
        this.EImg = this.shadowRoot.querySelector('img');
        this.EImg.setAttribute('src', this.srcImg);
    }
    
    assignFigcaption(){
        //WE passed the class of <figcaption> tag.
        this.EFigC = this.shadowRoot.querySelector('figcaption');
        this.EFigC.innerHTML = this.infoImg;
    }

    assignName(){
        //WE passed the class of <name-person> id.
        this.nameP = this.shadowRoot.querySelector('#name-person');
        this.nameP.innerHTML = this.namePerson;
    }

    assignProfession(){
        //WE passed the class of <profession> id.
        this.textP = this.shadowRoot.querySelector('#profession');
        this.textP.innerHTML = this.profPerson;
    }
    
    assignEducation(){
        //WE passed the class of <a> tag.
        this.btnCV = this.shadowRoot.querySelector('#btn-download-cv');
        this.btnCV.setAttribute('href', this.srcFile);
    }

    assignCopyright(){
        if(this.copyright){
            //WE passed the text of <footer> tag.
            this.eFoo = this.shadowRoot.querySelector('footer');
            this.eFoo.innerHTML = '&#169 '+ this.copyright;
        }else{
            this.eFoo = this.shadowRoot.querySelector('footer');
            this.eFoo.innerHTML = '&#169 todos los derechos reservados';
        }
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'srcImg') {
            this.srcImg = newValue;
        }else if(name === 'namePerson'){
            this.namePerson = newValue;
        }else if(name === 'profPerson'){
            this.profPerson = newValue;
        }else if(name === 'srcFile'){
            this.srcFile = newValue;
        }else if(name === 'copyright'){
            this.copyright = newValue;
        }
    }

}

customElements.define('info-profile', InfoProfile);