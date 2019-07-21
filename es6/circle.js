// circle.js
const PI = 3.14;
const circle_area = function (r) {
    return PI * r * r;
}

export {PI, circle_area};
export default function(r) { // only one default export
    return 2 * PI * r;
};