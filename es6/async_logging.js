let obj = {
    name: 'a',
    id: 123,
    address: {
        city: 'hangzhou',
        street: 'xiyuan'
    }
};

console.log('init obj JSON: ' + JSON.stringify(obj, null, 2));
console.log('init obj: ', obj); // expand will trigger re-evaluation
console.log('init obj clone: ', JSON.parse(JSON.stringify(obj)));

obj.id = 111;
obj.address.street = "yan'an";

console.log('updated obj JSON: ' + JSON.stringify(obj, null, 2));
console.log('updated obj: ', obj);
console.log('updated obj clone: ', JSON.parse(JSON.stringify(obj)));