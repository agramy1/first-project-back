
const data100 = require('./data100.js') 
const yargs =require("yargs")


yargs.command({
    command: "add",
    describe:"to add an item",
    builder:{
        fname:{
           describe:"the first name desc",
           demandOption: true,
           type:"string"
        },
        lname:{
           describe:"the last name desc",
           demandOption: true,
           type:"string"
        }
    },
    handler:(x) =>{
      //console.log(x.fname , x.lname) 
      data100.addPerson(x.id , x.fname , x.lname ,x.city ,x.age)
    }
})

yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(x) =>{
       data100.delteData(x.id)

    }
})

yargs.command({
    command:"read",
    describe:"to read an item",
    builder:{
        id:{
            describe:"this is id desc in read command",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
       data100.readData(x.id)
    }
})

yargs.command({
    command:"list",
    describe: "listed item",
    handler:(x) =>{
       data100.listData()
    }
})

yargs.command({
    command:"deleteAll",
    describe:"to delete all items",
    handler:() =>{
        data100.delteDataAll()
    }
})
yargs.parse()