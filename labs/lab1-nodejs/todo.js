const helpFunction = require('./helpers')

function main(para){
    const [ , ,toDo , ...data] = para

    const  newObj =   helpFunction.convertToObject(data)
    console.log(newObj)

    switch(toDo)
    {
        case 'add':
            helpFunction.add(newObj)
            break;   
        case 'list':
            helpFunction.list(newObj)
            break;
        case 'remove':
            helpFunction.remove(newObj)
            break;
        case 'edit':
            helpFunction.edit(newObj)
            break;
        case 'check':
            helpFunction.check(newObj)
            break;    
        case 'uncheck':
            helpFunction.uncheck(newObj)
            break;    
    

        default:
            break;              

    }



}

main(process.argv)