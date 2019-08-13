client.on("message", msg=>{

if(!msg.content.startsWith(${prefix}tax)) return;

let tax = msg.content.split(" ")[1]

let Price = msg.content.split(" ")[2];

if(!tax  !Price) return msg.reply(\${prefix}tax 15% 100000``).then(z=>z.delete(3000));

tax = tax.replace(/%/g,"");

let resulting = Math.floor(Price-(Price*(tax/100)));

if(!resulting  resulting < 0 ||  isNaN(resulting)) return msg.reply(\${prefix}tax 15% 100000`).then(z=>z.delete(3000));

msg.reply(resulting is ${resulting}$`)

})
