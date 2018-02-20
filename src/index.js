/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(null);
  let count = 0;
  for(let i = 1; i < preferences.length; i++) {
    let a = preferences[i];
    let b = preferences[a];
    let c = preferences[b];
    if(i === c && a !== b && b !== c && c !== a && preferences[i] !== null){
      preferences[i] = null;
      preferences[a] = null;
      preferences[b] = null;
      count += 1;
    }
  }
  return count;
};
