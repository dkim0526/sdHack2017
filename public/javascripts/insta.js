
$(function(){
    $("#main_form").submit(function(e){
        
        e.preventDefault();

        var data= {  
           "files":[  
              {  
                 "instaPath":"https://instagram.com/p/BLA29O8DHD2/",
                 "picture":"pug.jpg"
              },
              {  
                 "instaPath":"https://instagram.com/p/BKximeIgqqn/",
                 "picture":"kyunmi.jpg"
              }
           ]
        };
        
        value = $("#main_form input[name=url]").val();

        var found = false;
        var picture;
        var files = data["files"];
        for(var i = 0; i < files.length; i++){
            if(files[i].instaPath == value){
                found = true;
                picture = files[i].picture;
            }
        }
        console.log(picture);
        if(found){
            console.log(" I Found !! ");
            Cookies.set('picture', picture );
            $(location).attr('href', '/download')
        }
        else{
            console.log("I couldn't found!! :(((");
        }
    
    });

    $("#bookmarklet").click(function(e){
        e.preventDefault();
      alert('Drag and drop this to your bookmarks toolbar or save the link as a bookmark. When you are in Instagram, simply click the bookmark to download the photo.')  
    });
});