
function verif(arr,value,setValue){
    if(arr[0]){
        arr[1]={index:value,set:setValue}
        
    }else arr[0]={index:value,set:setValue}
}


var arr=[]
for(let i=1;i<17;i++){
    
   $('#div'+i).click(function(){
   $('#img'+i).css({'visibility':'visible'})
        const time=setTimeout(function(){
        $('#img'+i).css({'visibility':'hidden'})
    }, 2000)
    verif(arr,i,time)

    if( arr.length===2){
       
        if($('#img'+arr[0].index)[0].src===$('#img'+arr[1].index)[0].src){
            console.log(arr)
            clearTimeout(arr[0].set)
            clearTimeout(arr[1].set)


        }
    }
    
    
    })}
    
    
    
/*for(let i=1;i<17;i++){
    for (let j=1;j<17;j++){
    if($('#img'+i).src===$('#img'+j).src){


    }
}*/



    


    

