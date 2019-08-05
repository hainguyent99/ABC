var a=[];

for(var i=0; i<10; i++){
    a[i] = i;
}

var V=+prompt('nhap so nguyen V');

for(var i=0; i<10; i++){
    if(V===a[i]){
        var b=a[i];
        a[i]=a[a.length-1];
        a[a.length-1]=b;
        a.pop();
        break;  
    } 
    document.getElementById('demo').innerHTML = a;
}
