function loadScript(src,callback){
    var script = document.createElement("script") ;
    script.src = src;
    script.onload = ()=>{
       callback(null,src);
    }

    script.onerror = () =>{
        console.log('error occured on loading script' + src);
    
        callback(new Error('Error loading script'));
    }
    document.body.appendChild(script);
}

loadScript('https://code.jqueom/jquery-3.3.1.slim.min.js',hello);

function hello(error,src){
    if(error){
        console.log(error);
      return;
    }
    alert('hello' + src);
}

function goodMorning(name){
    alert('good morning'+ name)
}

//promises
