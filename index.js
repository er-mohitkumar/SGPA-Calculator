const scriptURL = 'https://script.google.com/macros/s/AKfycbyxFbAiWg-TeLrJjf-J_FZuyO0G8UtTe6GsOQ3_zaasp9ItNMfexPtcys5JYrD2qUw/exec'

const form = document.forms['details']

function selectDept() {
    var select = document.getElementById("dept");
    var selectedValue = select.options[select.selectedIndex].value;

    if (selectedValue !== 'CS') {
        alert('This page is in developing stage, Please select other Department!');
        select.value = 'CS';
    }
}


form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;
    var x = document.getElementById("Name").value;
    var y = document.getElementById("Roll").value;
    if (x == "" || y == "") {
        alert("Name and Roll No. must be filled out");
        return false;
    }
    else if (!/^\d{2}(epc|EPC)[a-zA-Z]{2}\d{3}$/.test(y)) {
        alert("Please enter a valid Roll number in capital letters!");
        return false;
    }
    else {
        document.getElementById('loadingIcon').style.display = 'block';
        document.getElementById('webBody').style.display = 'none';
        document.body.style.minHeight = '100vh';
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(() => {
                window.location.href = `${dept}/${year}/${year}.html`;
            })
            .catch(error => console.error('Error!', error.message))
    }

    if (window.location.href === `${dept}/${year}/${year}.html`) {
        document.getElementById('loadingIcon').style.display = 'none';
        document.getElementById('webBody').style.display = 'block';
        document.body.style.minHeight = '0';
    }
})


