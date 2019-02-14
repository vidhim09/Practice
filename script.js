$(document).ready(function(){
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    question11();
    question12();
    question13();
    question14();
    question15();
    question16();
    question17();
});


function question1(){
    console.log("Hello World");
}

function question2(){
    $('#test').addClass('load');
}

function question3(){
    $("div[class$='-new']").css("color","blue");
}

function question4(){
    $("input[type='submit']").attr('disabled','disabled');
    console.log("disable");    
}

function question5(){
    $("#main").children(".target").css("font-size","25px");
}

function question6(){
    $('#a6').on('click',function(){
        $('div.a6').replaceWith('<p>This is a paragraph.</p>');
    });
}

function question7(){
    $('#a7').on('click',function(){
        var str = $(this).html();
        $(this).append(" "+str);
    });
}

function question8(){
    $('#btn81').attr('disabled','disabled');
    $('#btn82').on('click',function(){
        $('#a8').html('Click Event 1 Working');
        $('#btn81').removeAttr('disabled','disabled');
    });
}

function question9(){
    $('#select').change(function(){
        var s = $(this).val();
        $('#a9').append('<span>'+s+' </span> ');
    });
}

function question10(){
    $('#a10').hover(function(){
        $('#dd').toggleClass('dd');
    });
}

function question11(){
    $('#a11').click(function(){
        $('#rm').removeAttr('href');
    });
}

function question12(){
    $('.parent').on('click',function(){
        $(this).toggleClass('clickparent');
    });
    $('div.parent').children(".child").click(function(e){
        console.log($(this).parent());
        $(this).parent().css('color','black');
        e.stopPropagation();
        $(this).siblings('span').text('Not Clickable');
    });
}

function question13(){
    var arr = [];
    $("#a13").click(function(){
        $('div.a').each(function(){
            arr.push($(this).height());
        });
        var maxHeight = 0;
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i]>maxHeight){
                maxHeight = arr[i];
            }
        }
        $("#ans").text(arr+" is "+ maxHeight);
    });
}

function question14(){
    $('#a14').click(function(){
        $('.a14').each(function(){
            if(parseInt($(this).text())>10){
                //console.log(parseInt($(this).text()));
                $(this).css("color","red");
            }
        });
    });
}

function question15(){
    $("#a15").click(function() {
        // data path
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts/1"
            })
            .done(function(res){
                $("#data").text(JSON.stringify(res));
                
            })
            .fail(function(){
                console.log("ERROR");
            });
    });    
}

function question16(){
    var a;
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts"
    })
    .done(function(res){
        a = res;
        var html='';
        //console.log("Content",a);
        for(var i = 0 ; i < 100 ; i+=10){
            html += '<tr>';    
            html += '<td>' + a[i]['userId'] + '</td>';
            html += '<td>' + a[i]['id'] + '</td>';
            html += '<td>' + a[i]['title'] + '</td>';
            html += '<td>' + a[i]['body'] + '</td>';
            html += '<td class="a16"><button>X</button></td>';
            html += "</tr>"; 
            //console.log(html);
        }
        $('#a16').html(html);
        //console.log(html)

        $('.a16').click(function(){
            $(this).parent().remove();
        });
    })
    .fail(function(){
        console.log("ERROR");
    });
    
    //$('#a16').html(JSON.stringify(arr[0]));
    // $("#a16").html("<tr><td>"+JSON.stringify(arr[0][0]["userId"])+"</td><td>"+JSON.stringify(arr[0][0]["id"])+"</td><td>"+JSON.stringify(arr[0][0]["body"])+"</td><td>"+JSON.stringify(arr[0][0]["title"])+"</td></tr>");
}
var val = 1;
function question17(){
    $("img").css("display", "none");
    $('#p1').css("display", "block");
    slideshow();
    
}

function slideshow(){
    if(val>4){
        val = 1;
    }
    $("img").css("display", "none");
    $('#p'+val).css("display", "block");
    val++;
    setTimeout(slideshow,500);
}