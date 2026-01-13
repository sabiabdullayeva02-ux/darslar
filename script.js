const son1 = 10;
const son2 = 5;
const arifmetikAmal = "*";
let natija;

switch (arifmetikAmal) {
    case "+":
        natija = son1 + son2;
        break;
    case "-":
        natija = son1 - son2;
    case "*":
        natija = son1 * son2;
        break;
    case "/":
        natija = son1 / son2;
        break;
    default:
        natija = "arifmetikAmal topilmadi";
        break;
}
console.log (natija);



