// var numbers = [90,34,67,55,12,47,87,67,64,33,76,121];

// for( var i=0; i<numbers.length;i++){
//     var number = numbers[i];
//   if(number > 67){
//     console.log(number);
// }


// for(var i=0; i<=10;i++){
//     if(i >5){
//         break;
//     }
//     console.log(i);
// }

var items = ['mobile', 'laptop','eyeglass','keyboard','picture','bag'];
for(var i=0; i<items.length;i++){
    var item = items[i];
    if(item == 'keyboard'){
        break;
    }
    // console.log(item)

}


for(var i=0; i<=10;i++){
    if(i >5){
        continue;
    }
    console.log(i);
}