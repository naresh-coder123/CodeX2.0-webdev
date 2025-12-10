let comparision=document.getElementById("comparisions");

let sortButton=document.getElementById("sort");
let arraycounter=document.getElementById("sizeRangearray");
let speedcounter=document.getElementById("sizeRangespeed");
let arrayContainer=document.getElementById("arrayContainer");
let newArrayButton=document.getElementById("array");
let algorithmSelect=document.getElementById("algorithm");

   let swaps=document.getElementById("swaps"); 
   let time=document.getElementById("time");   

let arraycount=50;
let speed=50;
let arrayHeights=[];


const renderarray=(arrayHeights, comparing=[],swapping=[],sorted=[])=>{
    arrayContainer.innerHTML="";
    const barWidth= Math.floor(arrayContainer.offsetWidth-arraycount*2)/arraycount;
    for(let i=0;i<arrayHeights.length;i++){
        const bar=document.createElement("div");
        bar.classList.add("array-bar"); 
        bar.style.height=`${arrayHeights[i]}px`;
        bar.style.width=`${barWidth}px`;
        bar.style.margin="0 1px";
        bar.style.backgroundColor="turquoise";


        if(comparing.includes(i)){
            bar.style.backgroundColor="yellow";
        }
        if(swapping.includes(i)){
            bar.style.backgroundColor="green";
        }
        if(sorted.includes(i)){
           arrayHeights.forEach(element => {
            bar.style.backgroundColor="green";
           });
        }   
        
        arrayContainer.appendChild(bar);
    }
}

const generateArray=()=>{
    arrayHeights=[];
    arrayContainer.innerHTML="";
    for(let i=0;i<arraycount;i++){
        let value=Math.floor(Math.random()*arrayContainer.offsetHeight);
        arrayHeights.push(value);
         
    }
    renderarray(arrayHeights);
}


newArrayButton.addEventListener("click", generateArray);


document.getElementById("arraySize").innerText = arraycount;
document.getElementById("speedValue").innerText = speed;


arraycounter.addEventListener("input",function(){
    arraycount=this.value;
    document.getElementById("arraySize").innerText=arraycount;
    console.log(arraycount);
    generateArray();
    resetstats();
});


speedcounter.addEventListener("input",function(){
    speed=this.value;
    document.getElementById("speedValue").innerText=speed;
    console.log(speed);
    
});

const resetstats=()=>{
    comparision.innerText="Comparisions : 0";
    swaps.innerText="Swaps : 0";
    time.innerText="Time : 0 ms";
    
};
let timerInterval;
let startTime;

const startTimer = () => {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        time.innerText = "Time : " + elapsed + " ms";
    }, 10); 
};

const stopTimer = () => {
    clearInterval(timerInterval);
};
const sortArray=async ()=>{
    resetstats();
    startTimer();
    sortButton.disabled = true;
            newArrayButton.disabled = true;
            arraycounter.disabled = true;
            algorithmSelect.disabled = true;
    switch(algorithmSelect.value){
        case "bubble":console.log("bubble");
            await bubbleSort();
            break;
        case "selection":
            await selectionSort();
            break;
        case "insertion":
            await insertionSort();
            break;
        
        case "quick":
            await quickSort(0,arrayHeights.length-1);
            break;
        default:
            break;;
    }

    sortButton.disabled = false;
            newArrayButton.disabled = false;
            arraycounter.disabled = false;
            algorithmSelect.disabled = false;
    stopTimer();
    if(timerInterval) {
        clearInterval(timerInterval); 
    }
};
 

sortButton.addEventListener("click",sortArray);
let comparisionCount=0;
let swapCount=0;

 const bubbleSort = async () => {
    console.log("Bubble Sort Started!");
    let n = arrayHeights.length;
   resetstats();
   let startTime=Date.now();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            
            comparisionCount++;
            comparision.innerText = "Comparisions : " + comparisionCount;
            renderarray(arrayHeights, [j, j + 1]);


            if (arrayHeights[j] > arrayHeights[j + 1]) {

                swapCount++;
                swaps.innerText = "Swaps : " + swapCount;

             
                let temp = arrayHeights[j];
                arrayHeights[j] = arrayHeights[j + 1];
                arrayHeights[j + 1] = temp;
                renderarray(arrayHeights,[j,j+1]);



                await new Promise((resolve)=>
                    setTimeout(() => {
                        resolve();
                    },101-parseInt(speed))
                );

          
               

              
            }
        }
    }
    renderarray(arrayHeights,[],[],[1]);

    console.log("Sorting Completed!");
    let endTime=Date.now();
    let timeTaken=endTime-startTime;
    time.innerText="Time : " + timeTaken + " ms";
};

 async function selectionSort() {
    resetstats();
    let startTime=Date.now();
            const n = arrayHeights.length;
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                
                for (let j = i + 1; j < n; j++) {
                    comparisionCount++;
                   comparision.innerText = "Comparisions : " + comparisionCount;
                    
                    renderarray(arrayHeights,[minIdx, j]);
                    await new Promise((resolve)=>
                    setTimeout(() => {
                        resolve();
                    },101-parseInt(speed))
                );

                    
                    if (arrayHeights[j] < arrayHeights[minIdx]) {
                        minIdx = j;
                    }
                }
                
                if (minIdx !== i) {
                    [arrayHeights[i], arrayHeights[minIdx]] = [arrayHeights[minIdx], arrayHeights[i]];
                    swapCount++;
                      swaps.innerText = "Swaps : " + swapCount;
                }
            }let endTime=Date.now();
    let timeTaken=endTime-startTime;
    time.innerText="Time : " + timeTaken + " ms";
        };

  async function quickSort(low, high) {
    let startTime=Date.now();
            if (low < high) {
                const pi = await partition(low, high);
                await quickSort(low, pi - 1);
                await quickSort(pi + 1, high);
            }
            let endTime=Date.now();
    let timeTaken=endTime-startTime;
    time.innerText="Time : " + timeTaken + " ms";
        }

        async function partition(low, high) {
            const pivot = arrayHeights[high];
            let i = low - 1;
            
            for (let j = low; j < high; j++) {
                comparisionCount++;
                comparision.innerText = "Comparisions : " + comparisionCount;
                
                renderarray(arrayHeights,[j, high]);
               await new Promise((resolve)=>
                    setTimeout(() => {
                        resolve();
                    },101-parseInt(speed))
                );

                
                if (arrayHeights[j] < pivot) {
                    i++;
                    [arrayHeights[i], arrayHeights[j]] = [arrayHeights[j], arrayHeights[i]];
                    swapCount++;
                       swaps.innerText = "Swaps : " + swapCount;
                }
            }
            
            [arrayHeights[i + 1], arrayHeights[high]] = [arrayHeights[high], arrayHeights[i + 1]];
             swapCount++;
                       swaps.innerText = "Swaps : " + swapCount;
            return i + 1;
        };

         async function insertionSort() {
            let startTime=Date.now();
            const n = arrayHeights.length;
            for (let i = 1; i < n; i++) {
                let key = arrayHeights[i];
                let j = i - 1;
                
                while (j >= 0) {
                  comparisionCount++;
                comparision.innerText = "Comparisions : " + comparisionCount;
                    
                    renderarray(arrayHeights,[j, j + 1]);
                   await new Promise((resolve)=>
                    setTimeout(() => {
                        resolve();
                    },101-parseInt(speed))
                );

                    
                    if (arrayHeights[j] > key) {
                        arrayHeights[j + 1] = arrayHeights[j];
                       swapCount++;
                       swaps.innerText = "Swaps : " + swapCount;
                        j--;
                    } else {
                        break;
                    }
                }
                arrayHeights[j + 1] = key;
            }
            let endTime=Date.now();
    let timeTaken=endTime-startTime;
    time.innerText="Time : " + timeTaken + " ms";
        }

generateArray();
resetstats();
