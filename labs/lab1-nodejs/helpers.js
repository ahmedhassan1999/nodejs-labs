
const fs = require('fs')

function convertToObject(data){

const obj = data.reduce((cum,element)=>{

        const [key,value] = element.split('=')

        cum[key] = value;
        
        return cum;


    },{})
    return obj

}

function add(data){
   
    if(!fs.existsSync('./db.json'))
    {
        fs.writeFileSync('./db.json' , JSON.stringify([]));
        
    }
    
      const  exitData  = fs.readFileSync('./db.json' , 'utf-8')
        const   exitDataParse = JSON.parse(exitData) 
       
        if(exitDataParse.length == 0)
        {
            id = 1
        }
        else 
        {
            id  = exitDataParse[exitDataParse.length - 1].id + 1
        }
   
    const toDo ={
        id : id ,
        title : data.title,
        body : data.body,
        checked : false 
 
     }

     exitDataParse.push(toDo);

     fs.writeFileSync('./db.json' ,JSON.stringify(exitDataParse))


}
function list(data)
{
    if(!fs.existsSync('./db.json'))
    {
        fs.writeFileSync('./db.json' , JSON.stringify([]));
        
    }
    
        const  exitData  = fs.readFileSync('./db.json' , 'utf-8')
        const   exitDataParse = JSON.parse(exitData) 

        if(data.type == 'unchecked')
        {
            const list = exitDataParse.filter(elm => !elm.checked)
            console.log(list)
        }
        else
        {
            if(data.type == 'checked')
            {
                const list = exitDataParse.filter(elm => elm.checked)
                console.log(list)
            }
        }
        
}


function remove(data){
    if (!fs.existsSync('./db.json')) {
        fs.writeFileSync('./db.json', JSON.stringify([]))
    }
    else{
        const exitData = fs.readFileSync('./db.json', 'utf-8')
        const exitDataParse = JSON.parse(exitData)
        const afterRemove = exitDataParse.filter((elm) => elm.id!=data.id)
        exitDataParse.push(afterRemove)
        fs.writeFileSync('./db.json', JSON.stringify(afterRemove))

    }
}

function edit(data){
    if (!fs.existsSync('./db.json')) {
        fs.writeFileSync('./db.json', JSON.stringify([]))
    }
    else{
        const exitData = fs.readFileSync('./db.json', 'utf-8')
        const exitDataParse = JSON.parse(exitData)
        const newTodos= exitDataParse.map((elm)=>{
            if(elm.id == data.id)
              {
                elm.title=data.title
                elm.body=data.body
              }
                  return elm
          })
          fs.writeFileSync('./db.json',JSON.stringify(newTodos))

    }
}

function check(data)
{
    const exitData = fs.readFileSync('./db.json','utf-8')
    const exitDataParse = JSON.parse(exitData)
    const newTodos= exitDataParse.map((elm)=>{
        if(elm.id == data.id)
          {
              elm.checked =true
          }
              return elm
      })
      fs.writeFileSync('./db.json',JSON.stringify(newTodos))
}
function uncheck(data)
{
    const exitData = fs.readFileSync('./db.json','utf-8')
    const exitDataParse = JSON.parse(exitData)
    const newTodos= exitDataParse.map((elm)=>{
        if(elm.id == data.id)
          {
              elm.checked =false
          }
              return elm
      })
      fs.writeFileSync('./db.json',JSON.stringify(newTodos))
}

module.exports = {
    convertToObject , add , list , remove , edit , check , uncheck

}