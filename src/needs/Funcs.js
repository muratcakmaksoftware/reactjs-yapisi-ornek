class Funcs {
  pageType(){
    let href = window.location.href;
    let type="user";
    
    if(href.indexOf("/admin") != -1){        
      type = "admin";
    }
    else if(href.indexOf("/login") != -1){
      type = "login";
    }
    else{
      type = "user";
    }
  
    return type;
  }
}
export default Funcs;