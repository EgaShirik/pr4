const arr = [1,2,3,4,5];
for(let i = 0; i< arr.length; i++)
{
    console.log(arr[i]);
}
const arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < arr1.length; i++)
{
    if(arr1[i] > -10 && arr1[i] < -3)
    {
        console.log(arr1[i]);
    }
}
const arr2 = [];
let sum = 0;
for(let i = 22; i <=56; i++)
{
    arr2[i] = i + 1;
    sum += arr2[i];
}
console.log(sum);
const arr3 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr3.length; i++) {
  let num = arr3[i];
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}
const arr4 = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
for(let i = 0; i < arr4.length; i++)
{
    if(arr4[i] === 'СБ' && arr4[i] === 'ВС');
    {
    document.write( arr4[i] +  "\t" );
    }
}
const arr5 = ['1','2','3'];
for(let i = 0; i < arr5.length; i++)
{
    if(i == arr5.length - 1)
    {
        console.log(arr5[i]);
    }
}
//let arr6 = [];
//let ch;
//let i = 0;
//while((ch = prompt("Enter the number", 0)) !== "0" && ch != null)
//{
    
 //   i++;
  //  let b = arr6 ;
  //  console.log(arr6);
//}
let arr7 = [12, false, 'Текст', 4, 2, -5, 0];
for(let i = arr7.length - 1; i >= 0; i--)
{
    console.log(arr7[i] );
}
console.log(arr7.reverse());
const arr8 = [5, 9, 21, , , 9, 78, , , , 6];
let schet = 0;
for(let i = 0; i < arr8.length; i++)
{
    if(arr8[i] === undefined)
    {
        schet += 1;
        
    }
    
}
console.log(schet);
const array = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let a = array.indexOf(0);
console.log(array.indexOf(0));
let b = array.lastIndexOf(0);
let summ = 0;
for(let i = a ; i < b; i++)
{
    
    summ += array[i + 1];
}
console.log(summ);