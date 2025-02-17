let items=[780,65,876,87,98,980];
let i=0;
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]=items[i]-offer;
};
console.log(`value after offer =${items}`)