const solution = function(d){
    var temp={}
    var prev =[]
    var subprev =0

    for(var i in d){
        sub = parseFloat(i.substr(8,9))

        if(subprev !=0){
            var dateDiff = sub-subprev

            if(dateDiff>1){
                
                var value = (d[i] - d[prev])/dateDiff   
                
                for(var z=1; z<dateDiff;z++){
                    var tomorrow = new Date(prev);
                    tomorrow.setDate(tomorrow.getDate() + z);
                    var time = tomorrow.toISOString().substr(0,10)
                    
                    temp[time] = d[prev] + value*z   
                }
            }
        }
        temp[i]=d[i]
        

        prev = i
        subprev = parseFloat(i.substr(8,9))
    }
    return temp
}

module.exports = solution