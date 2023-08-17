const serverArray:any = [
    {"id":"field1","mandatory":false,"visible":false},
    {"id":"field2","mandatory":false,"visible":false},
    {"id":"field3","mandatory":false,"visible":false},
    {"id":"field4","mandatory":false,"visible":false}
]

const localArray = [
    {"id":"field1"},
    {"id":"field2","mandatory":false},
    {"id":"field3","mandatory":true,"visible":false},
    {"id":"field4","mandatory":false,"visible":true},
    {"id":"field5","mandatory":false,"visible":true},
    {"id":"field6","mandatory":true,"visible":false},
]


for (let x = 0; x < serverArray.length; x++) {
    for (let y = 0; y < localArray.length; y++) {
        if (serverArray[x].id == localArray[y].id) { // serverArray[x].id/localArray[y].id = 'field1', 'field2'
            for (let key in localArray[y]) { //key = 'id', 'mandatory', etc
                serverArray[x][key] = localArray[y].hasOwnProperty(key) ? localArray[y][key] : serverArray[x][key]; //Override with local field attribute value (if present) in final returned response
            }
        }
    }
}

for (let i = 0; i < localArray.length; i++) {
    for (let j = 0; j < serverArray.length; j++) {
        if (localArray[i].id == serverArray[i].id)
        continue
        else
        serverArray.push(localArray[i])
        
    }
    
}

console.log(serverArray)