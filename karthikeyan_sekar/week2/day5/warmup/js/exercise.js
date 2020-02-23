
var sum = 0;

const adding = function (a,b)
{
  for (var i = 0; i < a.length; i++)
{
sum = sum + a[i];
}
addings(sum,b);

}

const addings = function (x,b)
{
for (var j = 0; j < b.length; j++)
{
var x = x + b[j];

}
console.log(`the greater sum is ${x}`);
}

adding([1,2,3,6,4],[3,4,5,2,1]);
