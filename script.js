function highlight() {
var boldWords =  document.getElementsByTagName("strong");
  for(let i=0; i<boldWords.length; i++) {
        boldWords[i].classList.add("highlight");
      }
 

}


function return_normal() {
   var boldWords = document.getElementsByTagName("strong");
      for(let i = 0; i<boldWords.length; i++)
	  {
        boldWords[i].classList.remove("highlight");
      }
}
