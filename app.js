$(document).ready(function(){

    $surface=$('.surface');
    $car=$('.car');
    $img=$('.car img');
    let flag= true
    
    const car=

    $(document).on('keypress',function(e){
        if(e.which==13){
            $($surface).toggleclass('moveright');
            $($car).toggleclass('suspension');
        }

    })
    $(document).on('keypress',function(e){
        if(e.which==119){
            if (flag){
                flag=false;
            }else{
                flag=true;
            }
        }

    })
    
       
})