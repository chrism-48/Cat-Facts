const myButton = document.getElementById('get_fact');
myButton.addEventListener('click', makeCall);
// var myBox = document.getElementById('cfact');

function makeCall() {
    axios.get("https://catfact.ninja/fact")
        .then(response => {
            let myFact = response.data;
            console.log(myFact);
            let catFact = JSON.stringify(myFact);
            // let catFact = JSON.parse(myFact);
            let myBox = document.getElementById('cfact');
            myBox.value = catFact;
        })
}

function resetMe() {
    let resetBtn = document.getElementById('cfact');
    resetBtn.value = " ";
}