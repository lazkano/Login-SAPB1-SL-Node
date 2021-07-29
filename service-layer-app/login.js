const request=require("request");

var url='https://192.168.100.7:50000/b1s/v2/Login';
var body={
        "CompanyDB": "ecommerce",
        "Password": "B1Admin",
        "UserName": "manager"
}
var postheaders={
    "Content-Type":"application/json"
}

var options={
    url:url,
    method:"POST",
    json:body,
    postheaders:postheaders,
    strictSSL: false
}
request.post(options,(error,response,body)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(response.statusCode);
        console.log(JSON.stringify(response.body));
    }
});