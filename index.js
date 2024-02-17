let keys = document.querySelectorAll(".keys");
let string = "";

keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        if (e.target.innerText === '=') {
            let input = document.querySelector(".input");
            try{
            input.textContent = eval(string);
        }
        catch(error){
            input.textContent = "ERROR";
        }
            console.log("result");
        } else if (e.target.innerText === 'C') {
            string = "";
            let input = document.querySelector(".input");
            input.textContent = string;
            console.log("cleared");
        } else {
            string = string + e.target.innerText;
            let input = document.querySelector(".input");
            input.textContent = string;
            console.log("value pushed ");
        }
    });
});
