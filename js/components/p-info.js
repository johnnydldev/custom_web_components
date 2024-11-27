const template = document.createElement('template');

template.innerHTML =`
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.p-info-container{
    display: block;
    border-radius: 10px;
    padding: 8px;
}
.p-info-container:hover{
    background-color: #264653;
    box-shadow: 5px 5px 5px;

}

p{
    margin-left: 10px;
}

h2{
    margin-left: 10px;
}

i{
    font-size: 3rem;
    margin: 0px 0px 0px 10px;
    border-radius: 10px;
}

.title-container{
    display: flex;
    align-items: center;
}

</style>

<div class="p-info-container">
    <div class="title-container">
        <i id="icon"></i>
        <h2 id="title"></h2>
    </div>
    <p id="text"></p>
</div>

`;

export class PInfo extends HTMLElement{

    static get observedAttributes(){
        return ['classIcon', 'bgColorIcon', 'titleInfo', 'textInfo'];
    }

    set classIcon(value){
        if(value){
            this.setAttribute('classIcon', value);
        }else{
            this.removeAttribute('classIcon');
        }
    }

    get classIcon(){
        return this.getAttribute('classIcon');
    }

    set titleInfo(value){
        if(value){
            this.setAttribute('titleInfo', value);
        }else{
            this.removeAttribute('titleInfo');
        }
    }

    get titleInfo(){
        return this.getAttribute('titleInfo');
    }

    set textInfo(value){
        if(value){
            this.setAttribute('textInfo', value);
        }else{
            this.removeAttribute('textInfo');
        }
    }

    get textInfo(){
        return this.getAttribute('textInfo');
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.assignIcon();

        this.assignHeader();
        
        this.assignParagrahp();

    }

    assignIcon(){
        if(this.classIcon){
            this.iRef = this.shadowRoot.getElementById('icon');
            this.iRef.setAttribute('class', this.classIcon);
        }
    }

    assignHeader(){
        if(this.titleInfo){
            this.tInfo = this.shadowRoot.getElementById('title');
            this.tInfo.innerHTML = this.titleInfo;
        }else{
            this.tInfo = this.shadowRoot.getElementById('title');
            this.tInfo.innerHTML = "Encabezado";
        }
        
    }

    assignParagrahp(){
        if(this.textInfo){
            this.pInfo = this.shadowRoot.getElementById('text');
            this.pInfo.innerHTML = this.textInfo;
        }else{
            this.pInfo = this.shadowRoot.getElementById('text');
            this.pInfo.innerHTML = "Parrafo";
        }
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'classIcon'){
            this.classIcon = newValue;
        }else if(name === 'titleInfo'){
            this.titleInfo = newValue;
        }else if(name === 'textInfo'){
            this.textInfo = newValue;
        }
        
    }


}

customElements.define('p-info', PInfo);