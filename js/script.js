<script>
       
      /*let money = document.getElementById("money");
      let display=document.getElementById("display");*/
      let bills=document.querySelectorAll("img[src$='rub.jpg']");
      let progressBar=document.querySelector(".progress-bar");
      
      let countTick=0;
      setInterval(()=>{
          countTick++;
          console.log("tick"+countTick);},100);
      let progressCount = 0;
      
      
      
      console.log(bills);
      for (let i=0; i<bills.length; i++){
          bills[i].onmousedown= function(){
          let bill=this;
          bill.style.position="absolute";
          bill.style.transform="rotate(90deg)";
          bill.ondragstart=function(){return false};
          bill_width=bill.getBoundingClientRect().width;
          bill_height=bill.getBoundingClientRect().height;
          
          bill.style.left=event.pageX - (bill_width/2) +'px';
          bill.style.top= event.pageY - (bill_height/2) +'px';
          document.onmousemove=function(e){
          bill.style.left=e.pageX - (bill_width/2) +'px';
          bill.style.top= e.pageY - (bill_height/2) +'px';
       }
          bill.onmouseup=function(){
      document.onmousemove=null;
      let bill_acc_top=bill_acc.getBoundingClientRect().top;
      let bill_acc_right=bill_acc.getBoundingClientRect().right;
      let bill_acc_left=bill_acc.getBoundingClientRect().left;
      let bill_acc_bottom=bill_acc.getBoundingClientRect().bottom-(bill_acc.getBoundingClientRect().height/3)*2;
      let bill_top=bill.getBoundingClientRect().top;
      let bill_right=bill.getBoundingClientRect().right;
      let bill_left=bill.getBoundingClientRect().left;
     
      
      if(bill_top>bill_acc_top&&bill_right<bill_acc_right&&bill_left>bill_acc_left&&bill_top<bill_acc_bottom){
      bill.hidden=true;
      money.value=+money.value+ +bill.dataset.value;
     balance.innerText=money.value;
      }
      }
      }
      }
      function getCoffee(coffeeName, cost){
            console.log("Внесено денег: "+money.value+" руб");
            if(money.value>=cost){
            money.value=money.value-cost;
            console.log("Кофе "+coffeeName+" готов");
            balance.innerText="Ваш баланс: "+money.value+" руб";
            progressBar.hidden=false;
            info.innerText= "Напиток готовится, ожидайте...";
            let timerId=setInterval(()=>{
            progressBar.style.width=progressCount+"%";
            progressCount++; 
            progressBar.innerText=progressCount+"%";
            if (progressCount==100){
                info.innerText="Кофе "+coffeeName+" готов";
                progressBar.hidden=true;
                progressBar.style.width=0+"%";
                progreeCount=0;
                clearInterval(timerId)}
            },100);
            
            }
            else{
            console.log("Недостаточно денег, кофе "+coffeeName+  "не может быть приготовлено");
            info.innerText="Недостаточно денег, кофе "+coffeeName+"     не может быть приготовлено";
        }
      }
  
     </script>
