
function dropdownmenu()
{
var y= document.getElementById("dropdown");
if(y.className==="topnav")
{
    y.className +=" responsive";
}
else
{
    y.className = "topnav";
}
}
$("#vega").accordion();
$(".links").draggable();
$("#bth1").click(fn1);
function fn1(){
    $(".links").fadeToggle();
}
$(".btn").click(fn2);
function fn2()
{
    alert("operation error contact mkenani at 0988827609 for help");
}
$(".t2").click(fn3);
function fn3()
{
    alert("not yet availabe"); 
}
$(".t1").click(fn4);
function fn4()
{
    alert("use draggable links"); 
}
$(".mimg").click(fn6);
function fn6()
{
    $(".mimg").slideToggle();
}

