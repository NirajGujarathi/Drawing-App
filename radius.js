function setRadius (newRadius){
    console.log(this.target);
    if(newRadius<minRad){
        newRadius=minRad;
    }else if(newRadius>maxRad){
        newRadius=maxRad;
    }
    radius=newRadius;
    radSpan.innerHTML=radius;
}

var minRad=0.5,
    maxRad=100,
    defaultRad=20,
    interval=5,
    radSpan=document.getElementById("radval"),
    decSpan=document.getElementById("decrad"),
    incSpan=document.getElementById("incrad");


// passing an anonymous function DEFINITION in here, it won't get executed until called,basically passing reference to the function,
// Whereas, if you just do setRadius(radius+interval), it calls the function with the arguments provided.
decSpan.addEventListener("click",function(){
    setRadius(radius-interval);
});
incSpan.addEventListener("click",function(){
    setRadius(radius+interval);
});

// incSpan.addEventListener("click",setRadius(radius+interval));
