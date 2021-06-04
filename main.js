var list=[];

    function showforloop() {
       list=[];
        for (var j = 1; j <= 5; j++){
            var R=document.getElementById("G"+j).value
        list.push(R)
        }
        document.getElementById("C").innerHTML = list;
    }                      
