export function Entries(body, title) {
  this.body = body,
  this.title = title;
}

Entries.prototype.addCounter = function () {
  let array = this.body.split(' ');
  return array.length;
  // console.log(array);
};

Entries.prototype.vowels = function () {
  let numVowels = this.body.match(/[aeiou]/gi).length;
  let numCon = (this.body.match(/[a-z]/gi).length - numVowels);
  let results = [numCon, numVowels];
  return results;
  // console.log(results);
};

Entries.prototype.getTeaser = function() {
  let array2 = this.body.split(' ');
  let teaser = [];
  if (array2.length <= 8) {
    teaser.push(array2);
  } else {
    teaser.push(array2);
    console.log(teaser.slice(3));
  }
  return teaser;
};
