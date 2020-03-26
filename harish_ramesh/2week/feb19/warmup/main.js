const values = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}

const match = function(word,array){
  for (let i=0;i<array.length;i++){
    if(array[i].length === word.length){
      return array[i];
    }
  }
}

console.log(match("listen",["enlist","googley","bananas"]));

const possible = function(word,array){
  let inputWord = word;
  let match = match(word,array);
// idea is to get values from the object add it and compare
}




//easy method is sort input word alphabetically and sort all words in array alphabetically then compare
