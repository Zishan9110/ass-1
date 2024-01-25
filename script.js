
document.addEventListener("DOMContentLoaded", function() {
    
    var submitButton = document.querySelector('button');
    submitButton.addEventListener('click', checkVoterEligibility);
});


function checkVoterEligibility() {
    
    var name = document.getElementById('name').value;
    var adhar = document.getElementById('adhar').value;
    var age = parseInt(document.getElementById('age').value);

    
    if (isNaN(age)) {
        alert('Please enter a valid age.');
        return;
    }

    
    if (age >= 18) {
        alert('Congratulations, ' + name + '! You are eligible to vote.');
    } else {
        alert('Sorry, ' + name + '. You are not eligible to vote.');
    }
}
