function slider(){
  var i = 0;
  var bdiv = document.getElementById("slider");
  var li_list = bdiv.getElementsByTagName("li");
  var lth = li_list.length;
  setInterval(function(){
    li_list[i].style.display = "none";
    i = ++i;
    if(i == lth){
      i = 0;
    }else{
      i = i ;
    }
    li_list[i].style.display = "block";
  },5000)

}