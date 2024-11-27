const template = document.createElement('template');

template.innerHTML = `
<style>
.hobbies-container{
    display: inline-block;
    margin: 5px 0px 5px 0px;
    border-radius: 10px;
    padding: 5px;
}

.hobbies-container:hover{
    background-color: #264653;
    box-shadow: 5px 5px 5px;
}

strong{
    border-radius: 10px;
    margin-right: 8px;
    padding: 3px;
}

strong:hover{
    background-color: #e76f51;
}
    
</style>

<div class="hobbies-container">
    <strong></strong>    
    <span></span>
</div>

<slot name="additional" id="infoAdd"></slot>

`;

class LiHobbie extends HTMLElement{

    static get observedAttributes(){
        return ['tHobbie', 'aHobbie'];
    }

    set tHobbie(value){
        if(value){
            this.setAttribute('tHobbie', value);
        }else{
            this.removeAttribute('tHobbie');
        }
    }

    get tHobbie(){
        return this.getAttribute('tHobbie');
    }

    set aHobbie(value){
        if(value){
            this.setAttribute('aHobbie', value);
        }else{
            this.removeAttribute('aHobbie');
        }
    }

    get aHobbie(){
        return this.getAttribute('aHobbie');
    }


    constructor(){
        super();
        //We create a shadow root tree in the DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.assignActivity();

        this.assignDescription();

    }

    assignActivity(){
        if(this.tHobbie){
            //WE passed the text for <strong> tag.
            this.tHob = this.shadowRoot.querySelector('strong');
            this.tHob.innerHTML = this.tHobbie;
            console.log(this.tHob);
        }else{
            this.tHob = this.shadowRoot.querySelector('strong');
            this.tHob.innerHTML = "Actividad";
        }
        
    }

    assignDescription(){
        if(this.aHobbie){
            //WE passed the text for <span> tag.
            this.aHob = this.shadowRoot.querySelector('span');
            this.aHob.innerHTML = this.aHobbie;
            console.log(this.aHob);
        }else{
            //WE passed the text for <span> tag.
            this.aHob = this.shadowRoot.querySelector('span');
            this.aHob.innerHTML = "Descripcion";
        }
    }

    attributeChangedCallback(attCurrent, oldValue, newValue) {
        if(attCurrent === 'tHobbie'){
            this.tHobbie = newValue;
        }else if(attCurrent === 'aHobbie'){
            this.aHobbie = newValue;
        }
    }


}

customElements.define('li-hobbie', LiHobbie);
