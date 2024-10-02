const button = document.querySelector("button");


    button.addEventListener("click",()=>{
        Notification.requestPermission().then(perm => {
            if(perm === "granted"){
                const notify = new Notification("Connection Established Successfully !" , {
                    body:"Now, You'll be notified for the respective Exam you Selected",
                    icon:"bee_falls4.jpg",
    
                });
            }else {
                console.log("Permission Denied");
            }
        });
    });
    


