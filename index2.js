const obj = [
    {
        label: 'a',
        value: 20
    },
    {
        label: 'b',
        value: 30

    },
    {
        label: 'c',
        value: 25
    }
];

const updatedObj = obj.map(item => {
    if (item.label === 'b') {
        return { ...item, value: 31 };
    }
    return item;
});
console.log(updatedObj);
// obj[1].value = 31;
// console.log(obj);

const firstname = "leen";
console.log(firstname.charAt(0).toUpperCase() + firstname.slice(1));
console.log(firstname.toUpperCase());

let a = 3.14222
let b = a.toFixed(2)
console.log(b);