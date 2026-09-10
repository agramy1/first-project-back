const fs=require("fs")  
const addPerson =(id , fname ,lname ,city ,age) =>{
    const allData =loadInfo()

    const duplicatedData = allData.filter((obj) =>{
       return obj.id === id
    })

    if(duplicatedData.length == 0){
        allData.push({
          id : id,
          fname : fname,
          lname : lname,
          city : city,
          age : age  
       })
     SaveAllData(allData)
    }else{
        console.log("error duplicated data")
    }
}

////////////////////////////////////////////////////////
const loadInfo= ()=>{
    try{
      const dataJson = fs.readFileSync("data15.json").toString()
      return JSON.parse(dataJson)
    }
    catch{
        return []      
    }
   
}
///////////////////////////////////////////////////////
const SaveAllData = (allData) =>{
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data15.json" ,allDataJson )
}

/////////////////////////////////////////////////////
const delteData =(id) =>{
    const allData =loadInfo()

    const dataTokeep = allData.filter((obj) =>{
        return obj.id !== id
    })
    //console.log(dataTokeep)
    console.log("you have successfuly delete")
    SaveAllData(dataTokeep)
}
/////////////////////////////////////////////////////
const readData =(id) =>{
    const allData =loadInfo()
    
    const itemNeeded = allData.find((obj) =>{
        return obj.id == id
    })
    //console.log(itemNeeded)
    if(itemNeeded){
        console.log(itemNeeded)
    }
    else{
        console.log("id needed not found")
    }

}
/////////////////////////////////////////////////////////////////
const listData =() =>{
    const allData =loadInfo()
    allData.forEach((obj) =>{
        console.log(obj.fname ,obj.lname , obj.city)
    })

}
////////////////////////////////////////////////////////////////
const deleteAll =()=>{
    SaveAllData([]);
    console.log("all data deleted successfully");
}



module.exports = {
   addPerson,
   delteData,
   readData,
   listData,
   deleteAll
}














