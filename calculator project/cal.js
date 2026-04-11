let click_close=document.getElementById("close").addEventListener("click", function(){
    
let close_bracket = document.getElementById("close");
let display = document.getElementById("display");
display.value = display.value + close_bracket.textContent;

});

var display = document.getElementById("display");

let click_zero=document.getElementById("0").addEventListener("click", function(){
    let zero = document.getElementById("0");
    display.value = display.value + zero.textContent;

});

let click_open=document.getElementById("open").addEventListener("click", function(){
    let open_bracket=document.getElementById("open");
    display.value = display.value + open_bracket.textContent;

});


let click_multiply=document.getElementById("multiply").addEventListener("click", function(){
    let multiply = document.getElementById("multiply");
    display.value = display.value + multiply.textContent;

})


let click_three= document.getElementById("3").addEventListener("click", function(){
    let three=document.getElementById("3");
    display.value = display.value + three.textContent;

});


let click_two = document.getElementById("2").addEventListener("click", function(){
    let two = document.getElementById("2");
    display.value = display.value + two.textContent;

});

let click_one = document.getElementById("1").addEventListener("click", function(){
    let one = document.getElementById("1");
    display.value = display.value + one.textContent;

});

let click_add = document.getElementById("add").addEventListener("click", function(){
    let add = document.getElementById("add");
    display.value = display.value + add.textContent;

});


let click_six = document.getElementById("6").addEventListener("click", function(){
    let six= document.getElementById("6");
    display.value = display.value + six.textContent;

});

let click_5 = document.getElementById("5").addEventListener("click", function(){
    let five = document.getElementById("5");
    display.value = display.value + five.textContent;

});

let click_four = document.getElementById("4").addEventListener("click", function(){
    let four = document.getElementById("4");
    display.value = display.value + four.textContent;
});


let click_sub = document.getElementById("sub").addEventListener("click", function(){
    let subract = document.getElementById("sub");
    display.value = display.value + subract.textContent;
});

let click_nine= document.getElementById("9").addEventListener("click", function(){
    let nine = document.getElementById("9");
    display.value = display.value + nine.textContent;
});

let click_eight= document.getElementById("8").addEventListener("click", function(){
    let eight = document.getElementById("8");
    display.value = display.value + eight.textContent;
});

let click_seven= document.getElementById("7").addEventListener("click", function(){
    let seven = document.getElementById("7");
    display.value = display.value + seven.textContent;
});

let click_divide= document.getElementById("divide").addEventListener("click", function(){
    let divide = document.getElementById("divide");
    display.value = display.value + divide.textContent;
});

let click_dot= document.getElementById("dot").addEventListener("click", function(){
    let dot = document.getElementById("dot");
    display.value = display.value + dot.textContent;
});


let cancel = document.getElementById("cancel");
cancel.addEventListener("click", function(){
    display = document.getElementById("display");
     
    let a = String(display.value)
    display.value = a.slice (0, a.length - 1);
});


let clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    display.value="";
});


let equal = document.getElementById("equal").addEventListener("click", function(){

    display.value;
    try{
    
        display.value = eval(display.value);
        if (display.value==="" || display.value==="undefined"){

            clear();
            alert("Enter a valid number or operator");
        }
    }
    catch(err){
        display.value = "Malfunction Performed."
        setTimeout(clear,3000);
    };

    function clear(){
        display.value="";
    }

});


display.addEventListener("input",function(){

    for(i=0; i<=display.value.length-1; i=i+1){
       
        if (display.value.charCodeAt(i)>= 45 && display.value.charCodeAt(i)<=57){
            continue;
        }
        else if (display.value.charCodeAt(i)>=40 && display.value.charCodeAt(i)<=43){
            continue;
        }
        else{
            display.value = display.value.replace(display.value.charAt(i),"");
            alert("Only numbers and operators allowed");
        }
    }

    // display.value = display.value.replace(/[^0-9+\-*/().]/g, '');

});
