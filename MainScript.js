let starter = ['Someday ', 'Today ', 'Tomorrow'];

let middle =['will be ', 'will not be ', 'will may be ', 'will most defineltly be '];

let end =['a lucky day.', 'a unlucky day.', 'a terrible day.', 'a great day.'];

let starterinput = starter[Math.floor(Math.random() * starter.length)]
//console.log(starterinput)

let midinput = middle[Math.floor(Math.random() * middle.length)]
//console.log(midinput)

let endinput = end[Math.floor(Math.random() * end.length)]
//console.log(endinput)

let generatemessage =`${starterinput}${midinput}${endinput}`

console.log(generatemessage);
