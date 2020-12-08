let data=Array();
let x=0;

function add(){
    data[x]=document.getElementById("text1").value;
    alert("Element:"+data[x]+" Added at index "+x);
    x++;
    document.getElementById("text1").value="";
}

function display(){
    let e="<hr/>";

    for(let j=0;j<data.length;j++){
        e+="Element "+j+"="+data[j]+"<br>";
    }
    document.getElementById("result").innerHTML=e;
}
