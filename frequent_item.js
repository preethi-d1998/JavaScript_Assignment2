let arr=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

let mf=1;
let m=0;
let item;

for(let i=0;i<arr.length;i++){
    
    for(let j=1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            m+=1;
            }
        if(mf<m){
            mf=m;
            item=arr[i];
        }
        }
        m=0; 

    }
document.write(item+" ("+mf+"times) ");
