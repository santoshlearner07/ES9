async function* load(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

let l = load();
l.next().then(r=>console.log(r))
l.next().then(r=>console.log(r))
l.next().then(r=>console.log(r))
l.next().then(r=>console.log(r))


