const myButton = document.getElementById('get_fact');
myButton.addEventListener('click', makeCall);
// var myBox = document.getElementById('cfact');

function makeCall() {
    axios.get("https://catfact.ninja/fact")
        .then(response => {
            let myFact = response.data;
            let catFact = JSON.stringify(myFact);
            let myBox = document.getElementById('cfact');
            myBox.value = catFact;
        })
}

function resetMe() {
    let resetBtn = document.getElementById('cfact');
    resetBtn.value = " ";
}