class HttpService {
    
    post(select, data){
        return fetch(this.getApiUrl(select),
        {
            method: "POST",
            cache: "no-cache",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: data
        })
        .then(response=> response.json());        
    }
    
    base_url = "http://localhost/learnreactphp/";
    getApiUrl(select){
        let url = this.base_url;
        switch (select) {
            case "login":
                url = url + "login.php";
                break;            
        }
        return url;
    }
}

export default HttpService;