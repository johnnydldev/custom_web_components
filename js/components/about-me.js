const template = document.createElement('template');

template.innerHTML = `
<style>
.about-container{
    border: solid white;
    background-color: #344e41;
    color: white;
    border-radius: 15px;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px 100px;
    grid-template-areas:
    "main main hobbie hobbie"
    "main main hobbie hobbie"
    "fn fn fn fn"
    "fn fn fn fn";
    text-align: justify;
    text-justify: inter-word;
}

#sn-about-me{
    grid-area: main;
}

#sn-hobbies{
    grid-area: hobbie;
}

.formation-container{
    grid-area: fn;
}


#sn-xp{
    grid-area: xp;
}


#sn-ed{
    grid-area: ed;
}


.option-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px 100px;
    grid-template-areas:
    "hr hr"
    "xp ed"
    "xp ed";
}

</style>

<div class="about-container">
    <section id="sn-about-me">
        <slot name="about-me"></slot>
    </section>

    <section id="sn-hobbies">
        <h2>Hobbies</h2>
        <slot name="hobbies"></slot>
    </section>

    <div class="formation-container">
        
        <div class="option-container">
            <section id="sn-xp">
                <slot name="experience"></slot>
            </section>

            <section id="sn-ed">
                <slot name="education"></slot>
            </section>
        </div>
        
    </div>
    
</div>
`;

export class AboutMe extends HTMLElement{

    static get observedAttributes(){
        return ['mainTitle'];
    }

    set mainTitle(value){
        if(value){
            this.setAttribute('mainTitle', value);
        }else{
            this.removeAttribute('mainTitle');
        }
    }

    get mainTitle(){
        return this.getAttribute('mainTitle');
    }

    constructor(){
        super();
        //We create a shadow root tree in the DOM
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.assignHeader();
        
    }

    assignHeader(){
        if(this.mainTitle){
            this.tInfo = this.shadowRoot.querySelector('#HeaderScTwo');
            this.tInfo.innerHTML = this.mainTitle;
            //console.log(this.tInfo);
        }else{
            this.tInfo = this.shadowRoot.querySelector('#HeaderScTwo');
            this.tInfo.innerHTML = 'Encabezado Seccion 2';
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'mainTitle'){
            this.mainTitle = newValue;
        }    
    }

}

customElements.define('about-me', AboutMe);