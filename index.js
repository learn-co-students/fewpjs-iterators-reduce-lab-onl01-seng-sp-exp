const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

et totalBatteries = batteryBatches.reduce(
    function(total, battery){
         return total + battery
    }, 0);