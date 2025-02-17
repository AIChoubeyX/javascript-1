//function myFunction(msg){
   // console.log(msg);
//}
//myFunction( "my name is ashutosh choubey");
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u')
            {
            count++;
        }
    }
    console.log(count);
}
