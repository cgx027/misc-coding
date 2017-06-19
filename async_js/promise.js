function cb(){
    return new Promise(function (resolve, reject) {
        setInterval(function(){
            console.log("a");
            resolve();
        }, 1000)
        console.log('b');
    })
}

cb();
