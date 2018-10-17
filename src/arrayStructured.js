
// simple array structure

let flat = function(arr = []){
    let length = arr.length;

    for(let i = 0; i < length; i++){
        let item = arr[i];

        if(typeof item !== 'number'){
            yield* flat(item);
        }
        else{
            yield item;
        }
    }
};

const arrayStructured = (arr) => {
    let a = [];

    for(let item of flat(arr)){
        a.push(item);
    }

    return a;
};

export default arrayStructured;


