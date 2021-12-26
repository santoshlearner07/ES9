let sqrFunc  = function(n1){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n1>0){
                resolve(n1*n1)
            }else {
                reject("Not Positive")
            }
        },2000)
    })
}

console.log('start')

// sqrFunc();

sqrFunc(10).then(result=>{
    console.log("result is", result)
}).catch(error=>console.log(error))
.finally(()=>{
    console.log("Inside Finally")
    console.log("executes all the time")
});
console.log("End")