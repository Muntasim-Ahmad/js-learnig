//we have 3 scopes in javascript 
// Global, Function and Block

// var by default is global 

//let and const by defaukt are blcok 


//global scope 


function Global() {

    console.log("global scope")

    // var name = "global";

    // let name2 = "abc";

    // const rollnumber = 55;

    // console.log("available in global scope", "name:", name, "name2:", name2, "rollnumber:", rollnumber)



    // function1()

    function2()

    // function function1() {
    //     console.log("test")
    //     console.log("available in function scope", "name:", name, "name2:", name2, "rollnumber:", rollnumber)
    // }

    let a = 0;

    function function2() {
        a = 90;
        // console.log("name in fxn 2", name)
    }

    console.log(a);

    // {
    //     let classs = "classssss";
    // }

}


Global();