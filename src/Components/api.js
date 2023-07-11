
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

// export const fetchAPI = function(date) {
//     let result = [];
//     const validDate = new Date(date)
//     let random = seededRandom(validDate.getDate());

//     for(let i = 17; i <= 23; i++) {
//         if(random() < 0.5) {
//             result.push(i + ':00');
//         }
//         if(random() < 0.5) {
//             result.push(i + ':30');
//         }
//     }
//     return result;
// };
export const fetchAPI = function(date) {
    return new Promise((resolve) => {
      let result = [];
      let random = seededRandom(date.getDate());
  
      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ':00');
        }
        if (random() < 0.5) {
          result.push(i + ':30');
        }
      }
  
      resolve(result);
    });
  };
  
// export const submitAPI = function(formData) {
//     return true;
// };

export const submitAPI = function(formData) {
    return Promise.resolve(true);
};