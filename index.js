let data_id = null;

class HTMLImport extends HTMLElement{
    static observedAttributes = ['src','data-id'];

    constructor(){
        super();
    }
    connectedCallback(){
        console.log("Added element to document");
    }
    disconnectedCallback(){
        console.log("Removed element from document");
    }
    adoptedCallback(){
        console.log("Element moved to new document");
    }
    attributeChangedCallback(name, oldValue, newValue){
        if(name=="data-id"){
            data_id = newValue;
        }
        if(name=="src"){
            fetch(newValue).then(response => response.text()).then(data=>{
                document.getElementById(data_id).removeChild(document.getElementsByTagName("tag-import")[0]);
                document.getElementById(data_id).innerHTML = data;
            });
        }
    }
}
window.customElements.define("tag-import",HTMLImport);