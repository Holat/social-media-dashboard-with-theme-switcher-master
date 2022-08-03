const checkBox =document.querySelector(`input[type="checkbox"].switch`);
const body =document.querySelector("body");
const modeText = document.querySelector(".mode")

console.log(modeText)

checkBox.addEventListener('change', () =>{
    checkBox.checked ? body.className = "light-mode": 
                       body.className = "dark-mode" 
    checkBox.checked ? modeText.innerText = "Light Mode": 
                       modeText.innerText = "Dark Mode" 
})
