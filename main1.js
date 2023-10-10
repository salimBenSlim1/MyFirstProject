function verif(arr,value,setValue){
    if(arr[0]){
        arr[1]={index:value,set:setValue}
    }else arr[0]={index:value,set:setValue}
    }

var arr=[]
var s=0
for(let i=1;i<17;i++){
    $('#div'+i).click(function(){
    $('#img'+i).css({'visibility':'visible'})
     time=setTimeout(function(){
    $('#img'+i).css({'visibility':'hidden'})
    }, 2000)
   
    verif(arr,i,time)
    console.log(arr)
    console.log(i)
    if($('#img'+arr[0].index)[0].src===$('#img'+arr[1].index)[0].src && arr[0].index!==arr[1].index ){
        s++
        console.log(arr[0].index)
            clearTimeout(arr[0].set)
            clearTimeout(arr[1].set)
            if(s===8){
                window.location.href="index2.html"}
            
            
            
}arr=[]

})}
var count = 50
timer = setInterval(function() {
    $("#timer").html(count--);
    if(count === 1) {
        clearInterval(timer)
        window.location.href="index3.html"
}}, 1000);




    


    

