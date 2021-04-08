// Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function(arr) {
    const breadcrumbs = {};
    let result = true;

    for(i = 0; i < arr.length; i++){
      // console.log(`~~~~~~~~ LOOP ~~~~~~~~~~~ i ======== ${i}`);
      if(breadcrumbs[arr[i]]) {
        breadcrumbs[arr[i]] = false;
      }else{
        // breadcrumbs[arr[i]] = true;
        result = true;
      }

      // return result;
    }
    
    return arr.sort((a, b) => a - b);
};

// uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
// console.log(uniqSort([4,3,3,,2,2,2,1]));