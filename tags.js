var tags =["MMMC34","ABTT34","ELPL4","AELP3","TIET11","AFLU3","AFLT3","RPAD5","ALSC3","ALPA4"];
var x = "";

jQuery(()=>{
var objTagMe = jQuery('.tag-me');	
var html='<ul class="tag-container"></ul><style>.tag-container{position: absolute; z-index:-1}.tag-container.active{list-style: none;\
    background: #fff;\
    top: '+(objTagMe.offset().top+objTagMe.height())+'px;\
    z-index: 9;\
    box-shadow: 9px 9px 24px #8c8c8c26;\
}.tag-container li{padding: 5px 15px;}</style>';


jQuery(html).insertAfter(".tag-me");

	 jQuery('.tag-me').keyup(function(){
	 	var str = jQuery(this).val();
	 	 jQuery('.tag-container').removeClass('active').html('');
	 		if((str.split(" ").splice(-1).join()).search('@')>-1){
	 			 x = str.split("@").pop().split(" ")[0];
			   if(x != "")
			    var res = filterItems(x, tags);
				else 
					res = [];

			   var h ="";
			    for(i in res){

			     h +='<li onclick="setTag(this)" style="cursor:pointer">@'+res[i]+'</li>';
			    
			     if(i>9){
			     	break;
			     }
			    }

			    jQuery('.tag-container').addClass('active').html(h);

			    
	 		}
			
	 })
});

const filterItems = (needle, heystack) => {
  let query = needle.toLowerCase();
  return heystack.filter(item => item.toLowerCase().indexOf(query) >= 0);
}
 function setTag(t){
 	var tg = jQuery(t).text();
 	var str = get_set_tag_str();
 	var n = str.split(" ").slice(0, -1).join(" ");
 	get_set_tag_str(n+' '+tg+' ');
 	jQuery('.tag-container').removeClass('active').html('');
 }

 function get_set_tag_str(t = null){
 	if(t == null)
 		return jQuery('.tag-me').val();
 	else
 		jQuery('.tag-me').val(t);
 }




