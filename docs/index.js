

let coll = document.getElementById("collBtn");



  coll.addEventListener("click", function() {
    this.classList.toggle("active");
    let content = document.getElementById("collapsible");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });



let donut = 0;
let autoClicker = 0;
let multiplierCount = 0;
let autoClickCost = 10;
let multiplierCost = 10;
let counter = 0;
let timer = undefined;




let donutIn = document.getElementById("clickDonut");
donutIn.addEventListener("click", DonutIn); 

let autoClickIn = document.getElementById("clickAutoClick");
autoClickIn.addEventListener("click", IncreaseAutoClick);

let donutMultiplierIn = document.getElementById("clickMultiplier");
donutMultiplierIn.addEventListener("click", IncreaseDonutMultiplier);

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", ResetFunc);

DisplayText()


function DisplayText(){
    let donutText = document.getElementById("donutsMade");
    donutText.innerText = " " + donut.toFixed(2);
 

    let autoClickText = document.getElementById("autoClickerCount");
    autoClickText.innerText = " " + autoClicker.toFixed(2);

    let donutMultiplierText = document.getElementById("donutMultiplier");
    donutMultiplierText.innerText = " " + multiplierCount.toFixed(2);

    let donutAutoClickCostText = document.getElementById("autoClickerCost");
    donutAutoClickCostText.innerText = " " + autoClickCost.toFixed(2);

    let multiplierCostText = document.getElementById("multiplierCost");
    multiplierCostText.innerText = " " + multiplierCost.toFixed(2);
    
   
   
    if(autoClickCost > donut){
        autoClickIn.disabled = true;
    }
    else{
        autoClickIn.disabled = false;
    }

    if(multiplierCost > donut){
        donutMultiplierIn.disabled = true;
    }
    else{
        donutMultiplierIn.disabled = false;
    }
} 

function DonutIn(){
    donut += Math.pow(1.2 , multiplierCount)
    DisplayText();
}

function IncreaseAutoClick(){
    if(autoClickCost <= donut){
        autoClicker++;
        donut -= autoClickCost;
        autoClickCost *= 1.75;
        DisplayText();
    }
    
    
   
}

function IncreaseDonutMultiplier(){
    if(multiplierCost <= donut){
        multiplierCount++;
        donut -= multiplierCost;
        multiplierCost *= 1.75;
        DisplayText();
    }
    
}

function multiplierBoost(){
    if(multiplierCost >= 0){
        donut * multiplierCost; 
        DisplayText();
    }
}
//Increase the click value
// multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.
function Count(){
    donut += Math.pow(1.2 , multiplierCount) * autoClicker;
 DisplayText();

}

function ActivateCount(){
    if(timer == undefined){
        timer = setInterval(Count, 1000);
    }
    
}
autoClickIn.addEventListener("click", ActivateCount);

function ResetFunc(){
    donut = 0;
    multiplierCount = 0;
    autoClicker = 0;
    multiplierCost = 10;
    autoClickCost = 10;
    counter = 0;
    timer = undefined;

}











