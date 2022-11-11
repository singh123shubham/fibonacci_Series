function faibonici(n){
    if(n<=1){
        return n
    }
    return faibonici(n-1)+ faibonici(n-2);
}
let number = 6
for(let i = 0 ; i < number ; i++){
    console.log(faibonici(i))
}