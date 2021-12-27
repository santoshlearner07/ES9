async function* load(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

async function test(){
    for await (const val of load()){
        console.log(val)
    }
}

test();
console.log('end of script')
