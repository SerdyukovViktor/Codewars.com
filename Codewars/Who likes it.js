//ver 1 Main
function likes(names) {
    let like = names.length,
        res = ``;
    if(like <= 0 || like == []){
        return 'no one likes this';
    }else if(like === 1){
        res = `${names[0]} likes this`
    }else if(like === 2){
        res = `${names[0]} and ${names[1]} likes this`
    }else if(like === 3){
        res = `${names[0]}, ${names[1]} and ${names[2]} likes this`
    }else if(like > 3){
        res = `${names[0]}, ${names[1]} and ${like - 2} others likes this`
    }
    return res;
  }

console.log(likes([]))
//, 'no one likes this');
console.log(likes(['Peter']))
//, 'Peter likes this');
console.log(likes(['Jacob', 'Alex']))
//, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']))
//, 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
// , 'Alex, Jacob and 2 others like this');