let markAsRead = document.querySelector('#mark-all-as-read')
let numberNotif = document.querySelector('#number-notif')


var allNotif;
var pointNew; 


function test(){
   
   allNotif = document.querySelectorAll('.notifs-persons')
   for(var i=0; i< allNotif.length; i++){
      allNotif[i].classList.remove("new");
   }

   pointNew = document.querySelectorAll('.point-mark')
   for(var i=0; i< pointNew.length; i++){
      pointNew[i].classList.remove("new-mark");
      pointNew[i].classList.add("hidden");
   }

   numberNotif.textContent= '0';



}

fetch("data.json")
.then(function(response){
   return response.json();
})

.then(function(products){
   let placeholder = document.querySelector(".main-container");
   let out = "";
   for(let item of products){

      out += `
        <section class="notifs-persons ${item.new? "new": ""}" >

        <img src="${item.img}" alt="">
        
        <div> 
        <div  class="all-parts">
        <div  class="first-part">
        <div class="txt-notif-and-date">
            <div class="txt-notif_date">
                <div class="txt-notif">
                <p><b>${item.name} </b>${item.action} <b>${item.detail}</b></p>
                <div class="point-mark ${item.new? "new-mark": "hidden"}"></div>
            </div>
                <div class="date">
                <p>${item.when}</p>
                </div>
                </div>
        </div>
        </div>
        

        <img class="${item.isImgPost? "img" : "hidden"}" src="${item.imgPost}" alt=""> 
        </div>

        <div class="${item.isPrivateMessage? "private-message" : "hidden"}">
        <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
          I'm already having lots of fun and improving my game.</p>
      
      </div>
        </div>

      </div>

        </section>
              `;

   }
 
   placeholder.innerHTML = out;
});





