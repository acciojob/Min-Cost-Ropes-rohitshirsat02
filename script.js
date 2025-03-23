function mincost(arr)
{ 
//write your code here
// return the min cost
 if (arr.length < 2) return 0;

  let totalCost = 0;

  while (arr.length > 1) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Take the first two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Step 3: Combine the ropes and update cost
    let currentCost = first + second;
    totalCost += currentCost;

    // Step 4: Add the new rope back and repeat
    arr.push(currentCost);
  }

  return totalCost;
  
}

module.exports=mincost;
