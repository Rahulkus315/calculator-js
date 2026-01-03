let string = "";
let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string);
                document.querySelector("#input").value = string;
            } catch {
                document.querySelector("#input").value = "Error";
                string = "";
            }
        }

        else if (value === "AC") {
            string = "";
            document.querySelector("#input").value = "";
        }

        else {
            string += value;
            document.querySelector("#input").value = string;
        }
    });
});
