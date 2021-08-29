
function read(nodeP){
  var a="";
  firebase.database().ref('linkwe/'+nodeP).on('value',(snap)=>{
  a = snap.val();
  });
  return a;
}
function write(data){
 firebase.database().ref("linkwe/").set({
 data
 });
}