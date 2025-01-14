const mynums = [1,2,3]

// const mytotals = mynums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval is ${currval}`);
    
//     return acc + currval;
// },0)

const mytotals = mynums.reduce((acc, curr)=> acc +curr,0)
console.log(mytotals);


const shoppingcart = [
    {
        itemname: "js course",
        price: 999,
    },
    {
        itemname: "py course",
        price: 699,
    },
    {
        itemname: "data science course",
        price: 11999,
    },
    {
        itemname: "mob dev course",
        price: 3999,
    },
]

const pricetopay = shoppingcart.reduce((acc, item )=> acc+item.price ,0)
console.log(pricetopay);
