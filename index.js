var myProgressBar=$("input");
var p=false;

var a=new Audio("images/left_and_right.mp3");
var b=new Audio("images/habibi.mp3");
var c=new Audio("images/levitating.mp3");
var d=new Audio("images/Metamorphosis.mp3");
var e=new Audio("images/no_lie.mp3");

var progress;

$(".songitemsplay").click(function()
{
    var n = $(this).attr("id");


    if(p===true)
    {
        p=false;
        switch(n)
        {
            case "left_and_right":
                a.pause();
                $(".songinfo").css("opacity","0");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/play.png");
                $(".masterPlay").attr("src","images/play3.png");
                break;

            case "habibi":
                b.pause();
                $(".songinfo").css("opacity","0");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/play.png");
                $(".masterPlay").attr("src","images/play3.png");
                //b.ontimeupdate(time(2));
                break;

            case "levitating":
                c.pause();
                $(".songinfo").css("opacity","0");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/play.png");
                $(".masterPlay").attr("src","images/play3.png");
               // c.ontimeupdate(time(3));
                break;

            case "Metamorphosis":
                d.pause();
                $(".songinfo").css("opacity","0");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/play.png");
                $(".masterPlay").attr("src","images/play3.png");
               // d.ontimeupdate(time(4));
                break;

            case "no_lie":
                e.pause();
                $(".songinfo").css("opacity","0");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/play.png");
                $(".masterPlay").attr("src","images/play3.png");
               // e.ontimeupdate(time(5));
                break;
        }
    }
    
    else if(p===false)
    {
        p=true;
        switch(n)
        {
            case "left_and_right":
                a.play();
                $(".songinfo").css("opacity","1");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/pause.png");
                $(".masterPlay").attr("src","images/pause2.png");
                $("h6").text("Left and right");
                a.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((a.currentTime/a.duration)*100);
                    //console.log(progress);
                    myProgressBar.attr("value",progress);
                 });
                
                break;

            case "habibi":
                b.play();
                $(".songinfo").css("opacity","1");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/pause.png");
                $(".masterPlay").attr("src","images/pause2.png")
                $("h6").text("Habibi");
                b.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((b.currentTime/b.duration)*100);
                   // console.log(progress);
                   myProgressBar.attr("value",progress);
                 });
                break;

            case "levitating":
                c.play();
                $(".songinfo").css("opacity","1");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/pause.png");
                $(".masterPlay").attr("src","images/pause2.png")
                $("h6").text("Levitating");
                c.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((c.currentTime/c.duration)*100);
                    //console.log(progress);
                    myProgressBar.attr("value",progress);
                 });
                
                break;

            case "Metamorphosis":
                d.play();
                $(".songinfo").css("opacity","1");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/pause.png");
                $(".masterPlay").attr("src","images/pause2.png")
                $("h6").text("Metamorphosis");
                d.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((d.currentTime/d.duration)*100);
                //    console.log(progress);
                myProgressBar.attr("value",progress);
                 });
                 
                break;

            case "no_lie":
                e.play();
                $(".songinfo").css("opacity","1");
                $("#"+n).addClass("clicked");
                setTimeout(function()
                {
                   $("#"+n).removeClass("clicked");
                },100); 
                $("#"+n).attr("src","images/pause.png");
                $(".masterPlay").attr("src","images/pause2.png")
                $("h6").text("No-lie");
                e.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((e.currentTime/e.duration)*100);
                    //console.log(progress);
                    myProgressBar.attr("value",progress);
                 });
                 
                break;

        }
       
    }
});

var num=0;

$(".masterPlay").click(function()
{
    num=num%5;

    if(p===true)
    {
        p=false;
        switch(num)
        {
            case 0:
                a.pause();
                $(".songinfo").css("opacity","0");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/play3.png");
                $("#left_and_right").attr("src","images/play.png");
                num++;
                break;

            case 1:
                b.pause();
                $(".songinfo").css("opacity","0");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/play3.png");
                $("#habibi").attr("src","images/play.png");
                num++;
               // b.ontimeupdate(time(2));
                break;
            case 2:
                c.pause();
                $(".songinfo").css("opacity","0");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/play3.png");
                $("#levitating").attr("src","images/play.png");
                num++;
               // c.ontimeupdate(time(3));
                break;
            case 3:
                d.pause();
                $(".songinfo").css("opacity","0");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/play3.png");
                $("#Metamorphosis").attr("src","images/play.png");
                num++;
               // d.ontimeupdate(time(4));
                break;
            case 4:
                e.pause();
                $(".songinfo").css("opacity","0");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/play3.png");
                $("#no_lie").attr("src","images/play.png");
                num++;
               // e.ontimeupdate(time(5));
                break;
        }
    }
    
    else if(p===false)
    {
        p=true;
        switch(num)
        {
            case 0:
                a.play();
                $(".songinfo").css("opacity","1");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/pause2.png");
                $("#left_and_right").attr("src","images/pause.png");
                $("h6").text("Left and right");
                a.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((a.currentTime/a.duration)*100);
                  //  console.log(progress);
                  myProgressBar.attr("value",progress);
                 });
                 
                break;

            case 1:
                b.play();
                $(".songinfo").css("opacity","1");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/pause2.png");
                $("#habibi").attr("src","images/pause.png");
                $("h6").text("Habibi");
                b.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((b.currentTime/b.duration)*100);
                   // console.log(progress);
                   myProgressBar.attr("value",progress);
                 });
                 
                break;

            case 2:
                c.play();
                $(".songinfo").css("opacity","1");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/pause2.png");
                $("#levitating").attr("src","images/pause.png");
                $("h6").text("Levitating");
                c.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((c.currentTime/c.duration)*100);
                 //   console.log(progress);
                 myProgressBar.attr("value",progress);
                 });
                 
                break;

            case 3:
                d.play();
                $(".songinfo").css("opacity","1");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/pause2.png");
                $("#Metamorphosis").attr("src","images/pause.png");
                $("h6").text("Metamorphosis");
                d.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((d.currentTime/d.duration)*100);
                  //  console.log(progress);
                  myProgressBar.attr("value",progress);
                 });
                 
                break;

            case 4:
                e.play();
                $(".songinfo").css("opacity","1");
                $(".masterPlay").addClass("clicked");
                setTimeout(function()
                {
                   $(".masterPlay").removeClass("clicked");
                },100); 
                $(".masterPlay").attr("src","images/pause2.png");
                $("#no_lie").attr("src","images/pause.png");
                $("h6").text("No-lie");
                e.addEventListener("timeupdate",(event)=>{
                    var progress=parseInt((e.currentTime/e.duration)*100);
                  //  console.log(progress);
                  myProgressBar.attr("value",progress);
                });
                
                break;

            }
    }
});
 