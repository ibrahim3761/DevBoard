document.getElementById('cmp-btn-1').addEventListener('click',function (e){
    CompTask ('cmp-btn-1',e,"card-title-1");
})
document.getElementById('cmp-btn-2').addEventListener('click',function (e){
    CompTask ('cmp-btn-2',e,'card-title-2');
})
document.getElementById('cmp-btn-3').addEventListener('click',function (e){
    CompTask ('cmp-btn-3',e,'card-title-3');
})
document.getElementById('cmp-btn-4').addEventListener('click',function (e){
    CompTask ('cmp-btn-4',e,'card-title-4');
})
document.getElementById('cmp-btn-5').addEventListener('click',function (e){
    CompTask ('cmp-btn-5',e,'card-title-5');
})
document.getElementById('cmp-btn-6').addEventListener('click',function (e){
    CompTask ('cmp-btn-6',e,'card-title-6');
})

document.getElementById('clr-his-btn').addEventListener('click',function(){
    document.getElementById('task-complete-container').innerHTML = "";
})