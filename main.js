var menu=["Veg Pizza",

"Non-Veg Pizza",

"Paneer Pizza",

];
var suggested="";

function show(){
    document.getElementById("menu_div").innerHTML=menu;
};
function add_item1(){
    var extra_item=document.getElementById("add_item").value;
    menu.push(extra_item);
    console.log(extra_item);
}



