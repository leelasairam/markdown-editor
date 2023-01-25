function MarkUp(){
    document.getElementById('content').innerHTML = marked.parse(`${document.querySelector("#MInp").value}`);
    document.querySelector("#MInp").style="display:none;"
    document.querySelector("#EB").style="display:none;"
    document.querySelector("#content").style="display:block;"
}

const Bold = () => {
    let SelectedTextValue = window.getSelection().toString();
    if (SelectedTextValue.length>0){
        SelectedText("**","**")
    }
    else{
        document.getElementById('MInp').value += " **B** "
    };
}

const Italic = () => {
    let SelectedTextValue = window.getSelection().toString();
    if (SelectedTextValue.length>0){
        SelectedText("_","_")
    }
    else{
        document.getElementById('MInp').value += " _I_ ";
    }
}

const CodeBlock = () => {
    let SelectedTextValue = window.getSelection().toString();
    if (SelectedTextValue.length>0){
        SelectedText("``` "," ```")
    }
    else{
        document.getElementById('MInp').value += '\n``` CB ``` ';
    }
}

const Heading = () => {
    let SelectedTextValue = window.getSelection().toString();
    if (SelectedTextValue.length>0){
        SelectedText("## "," ##")
    }
    else{
        document.getElementById('MInp').value += ' ## H ## ';
    }
}

const Code = () => {
    let SelectedTextValue = window.getSelection().toString();
    if (SelectedTextValue.length>0){
        SelectedText("`","`")
    }
    else{
        document.getElementById('MInp').value += '`C`';
    }
}


const UL = () => {
    let SelectedTextValue = window.getSelection().toString();
    if (SelectedTextValue.length>0){
        SelectedText("-","")
    }
    else{
        document.getElementById('MInp').value += '- ';
    }
}

const OL = () => {
    let SelectedTextValue = window.getSelection().toString();
    if (SelectedTextValue.length>0){
        SelectedText("OL","")
    }
    else{
        document.getElementById('MInp').value += '1. ';
    }
}

const Link = () => {
    document.getElementById('MInp').value += ' [Display Name](url)';
}

const Image1 = () => {
    document.getElementById('MInp').value += `\n![Image description](url)`;
}

function SelectedText(Start,End){
    let txtarea = document.getElementById("MInp");
    let start = txtarea.selectionStart;
    let finish = txtarea.selectionEnd;
    let allText = txtarea.value;
    let sel = allText.substring(start, finish);
    let newText='';
    if(Start && End){
        newText=allText.substring(0, start)+`${Start}${sel}${End}`+allText.substring(finish, allText.length);
        txtarea.value=newText;
    }
    else{
        let Lines = sel.split("\n");
        Lines.forEach((i,j) => {
            newText+=Start!="OL" ? `${Start} ${i} \n` : `${j+1}. ${i} \n`;
        });
        txtarea.value=allText.substring(0, start)+newText+allText.substring(finish, allText.length);
    }
}

function ShowTextArea(){
    document.querySelector("#MInp").style="display:block;";
    document.querySelector("#EB").style="display:block;margin-top: 1rem;";
    document.querySelector("#content").style="display:none;";
}

