let xhr = new XMLHttpRequest()
xhr.open("GET","https://jsonplaceholder.typicode.com/posts")
xhr.send("")
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let data = xhr.response;
        console.log(JSON.parse(data));
        //? convert data to js object data
        let d = JSON.parse(data)
        for(let i=0;i<d.length;i++){
             console.log(d[i].title);
             document.getElementById("form").innerText += d[i].title
        }
    }
}