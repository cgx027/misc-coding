async function testFunc(){
    console.log("this is a simple test");
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}

async function tester() {
    var t = await testFunc();
    return 1;
}

async function tester1() {
    var t1 = await tester();
    console.log(t1);
}
tester1();
// tester(function(value) {
//     console.log(value);
// });


