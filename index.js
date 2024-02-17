let keys = document.querySelectorAll(".keys");
let string = "";

let err="ERROR..."
keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        if (e.target.innerText === '=') {
            let input = document.querySelector(".input");
                input.value = eval(string);
        } else if (e.target.innerText === 'C') {
            string = "";
            let input = document.querySelector(".input");
            input.value = string;
            console.log("cleared");
        } else {
            string = string + e.target.innerText;
            let input = document.querySelector(".input");
            input.value = string;
            console.log("value pushed ");
        }
    });
});
