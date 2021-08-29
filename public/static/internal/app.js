var links;
function load_app(){
const queryString = window.location.search;
 if(queryString.length!=0){
  bod.innerHTML="";
  bod.innerHTML="Loading your link please wait..."
  var iny;
  var w = 0;
  var p = setInterval(function(){ iny = read("data").split("!");console.log("w");},200); 
  var temp =2000;
   setTimeout(function(){
   var index = parseInt(queryString.replace("?",""),36);
   console.log(iny[index]);
   window.open(iny[index],"_self");
   clearInterval(p);
   if(iny[index].length<1)
   bod.innerHTML="Sorry :(, Cannot find the link";
   },temp);
 }     
 else start_app();                                 
}
function start_app(){

 setInterval(function(){ links = read("data").split("!");},1000);
 main_block.hidden=true;
 splash.width="200";
 splash.height="200";
 setInterval(() => {
  pre_block.hidden = true;   
  main_block.hidden=false;                                    
 }, 1500);
}
function genrate_link(new_link){
 if(new_link.length==0){
   statusR.hidden=false;
   statusR.style.color="red";
   statusR.innerHTML="Enter the link first";
   return;
 }
 statusR.style.color="green";
 statusR.innerHTML="Genrating...";
 links[links.length]=new_link;
 var out = "";
 for(var i = 0;i<links.length;i++){
   out+=links[i]+"!";
   }
 out = out.replace("!!","!");
 write(out);
 var vt = 0;
 for(var i = 0;i<links.length;i++){    
   if(links[i].length!=0)vt++;
   if(links[i]==new_link){console.log(encode(vt));i=links.length;}
 }
 statusR.innerHTML="https://linkwe.web.app?"+encode(vt);
}

function encode(inp){
 return inp.toString(36);
}
function decode(inp){
 return parseInt(inp,36);
}
function copyT(){
   if(statusR.style.color=="green"){
   var copyText = statusR;

  /* Select the text field */
 
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.innerHTML);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.innerHTML);
   }
}