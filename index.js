const os = require('os')
const log = require('../logger')

setInterval(function() {
    const {freemem, totalmem} = os;

    const total = parseInt(totalmem()/1048576) //bytes to megabytes
    const free = parseInt(freemem()/1048576)
    const using = total - free
    const usage = using/total*100

    const mem_stats = {
        total: total + ' MB',
        using: using + ' MB',
        free: free + ' MB',
        usage: usage.toFixed(2) + '%'
    }
    
    console.clear()
    console.table(mem_stats)
    log(`${JSON.stringify(mem_stats)}\n`)
    
}, 1000)