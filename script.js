// const regularExp = /^[0-9.*\-+\/]*$/;

// const calculater = (event) => {
    
//     if(regularExp.test(event.key)){
//         return true;
//     }else{
//         return  false;
//     }
// }

let input = document.getElementById('display-value');
let buttons = document.querySelectorAll('button');
console.log(buttons);
let string = "";
// let arr = Array.from('buttons');
// console.log(arr);
buttons.forEach(button => { button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DC') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});