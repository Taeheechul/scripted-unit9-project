function addContacts(){ 
 	var contacts={};
 	 contacts["Super Junior"]={
 	 	"location":"Seoul,South Korea",
 	 	"email":"SJELF@gmail.com",
 	 	"picture":"zhttp://k-popism.com/wp-content/uploads/2016/01/Super-Junior.jpg"
 	 };
 	 contacts["Big Bang"]={
 	 	"location":"Seoul,South Korea",
 	 	"email":"BBBang@gmail.com",
 	 	"picture":"http://www.jpopasia.com/i1/celebrities/1/86-bigbang-cfyg.jpg"
 	 	};
 	 contacts["fiestar"]={
 	 	"location":"Seoul,Korea",
 	 	"email":"Fieffffstar@hotmail.com",
 	 	"picture":"https://yellowslugreviews.files.wordpress.com/2015/03/fiestar-youre-pitiful.jpg"
 	 	 };
 	 return contacts;
 	//  "Super Junior":"seoul,South Korea"
 	// "Big Bang":"seoul, South Korea"
 	// "Fie star":"seoul,south korea"
 	
 }
 
 function searchContacts(contacts, query) {
     for (var i in contacts){ 
         console.log(contacts[i]);
     }
     
     
 }