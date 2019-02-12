
// var q2 = document.getElementById('q2').value;
copyObj();
createList();
function interest(){
    var a1 = document.getElementById('a1');
    var str = prompt("Enter amount,rate and time.(format amount,rate,time)","a,r,t");
    
    var arr = str.split(',');
    console.log(arr);
    var flag = 0;
    for(var i = 0 ; i < arr.length ;i++){
        if(isNaN(arr[i])){
            flag = 1;
        }
        arr[i] = parseFloat(arr[i]);
    }
    console.log(flag);
    if(flag===1){
        a1.textContent = "Wrong Input";   
    }
    else{
        var si = arr[0]*arr[1]*arr[2]/100;
        a1.textContent = "Simple interest for Amount "+arr[0]+", for rate "+arr[1]+" and time "+arr[2]+" is "+si; 
    
    }
    
}

function isPalindrome(){
    var q2 = document.getElementById('q2');
    q2 = q2.value;
    var a2 = document.getElementById('a2');
    var str ="";
    for(var i = q2.length - 1 ; i > -1 ; i-- ){
        str = str + q2[i];
    }
    if(q2 === str){
        a2.textContent = "" + q2 + " is a Palindrome"; 
    }else{
        a2.textContent = "" + q2 + " is not a Palindrome"; 
    }

}

function areaCircle(){
    var q3 = document.getElementById('q3');
    q3 = q3.value;
    var a3 = document.getElementById('a3');
    var area = q3*q3*Math.PI;    
    a3.textContent = "Area of Circle with radius " + q3 + " is " + area; 
}

function copyObj(){
    var obj = {
        name : "Vidhi",
        comp : "QE",
        des : "Intern"
    }
    console.log("Original Object",obj);
    var newobj = {};
    var k ;
    for(k in obj){
        newobj[k] = obj[k];
    }
    console.log("Copy Object",newobj);
}

function createList(){
    var li = [
        {
            name:"ABC",
            age: 24,
            salary : 40000,
            dob: "01/01/1994"
        },
        {
            name: "DEF",
            age:23,
            salary: 5000,
            dob: "02/02/1995" 
        },
        {
            name: "IJK",
            age: 24,
            salary: 4000,
            dob:"03/03/1994"
        },
        {
            name:"LMN",
            age: 22,
            salary: 30000,
            dob:"04/04/1996"
        },
        {
            name:"OPQ",
            age: 21,
            salary: 20000,
            dob:"05/05/1997"
        },
        {
            name:"RST",
            age: 20,
            salary: 10000,
            dob:"06/06/1998"
        },
        {
            name:"UVW",
            age: 23,
            salary: 900,
            dob:"06/06/1995"
        }
    ];
    console.log(li);
    var a41 = document.getElementById('a41');
    var a42 = document.getElementById('a42');
    var a43 = document.getElementById('a43');
    var a44 = document.getElementById('a44');
    a41.textContent = JSON.stringify(li); 
    a42.textContent = JSON.stringify(filterSalary(li)); 
    a44.textContent = JSON.stringify(filterSalaryAndAge(li)); 
    //console.log(li);
    a43.textContent = JSON.stringify(groupByAge(li));
}

function filterSalary(list){
    var arr=[];
    for(var i = 0 ; i < list.length ; i++){
        if(list[i]["salary"]>5000){
            arr.push(list[i]);
        }
    }
    return arr;
}

function groupByAge(list){
    console.log("List",list);
    var arr = [];
    var arr1 = list;
    //console.log("List",arr1);
    for(var i = 0 ; i < arr1.length ; i++){
        
        //console.log("from for 1",arr2);
        if(arr1[i]["age"]!==0){
            var arr2=[];
            arr2.push("For Age: "+ arr1[i]["age"]);
            //console.log("if",arr2);
            arr2.push(arr1[i]["name"]);
            for(var j = i+1 ; j < arr1.length;j++){
                //console.log("for 2 ",arr2);
                if(arr1[i]["age"]===arr1[j]["age"]){
                    arr2.push(list[j]["name"]);
                    arr1[j]["age"] = 0;
                }
                //console.log("for out ",arr1);
            }
            arr.push(arr2); 
        }
        //console.log(arr);
           
    }
    return arr;
}

function filterSalaryAndAge(list){
    var arr=[];
    for(var i = 0 ; i < list.length ; i++){
        if(list[i]["salary"]<1000 && list[i]["age"]>20){
            list[i]["salary"] = list[i]["salary"] * 5;
            arr.push(list[i]);
        }
    }
    return arr;
}
    
    