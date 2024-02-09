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
    const load = true;
    if (load) {
        document.getElementById('loadingIcon').style.display = 'block';
        document.getElementById('webBody').style.display = 'none';
        document.body.style.minHeight = '100vh';
    }
    window.location.href = `${dept}/${year}/${year}.html`;
    if (window.location.href === `${dept}/${year}/${year}.html`) {
        document.getElementById('loadingIcon').style.display = 'none';
        document.getElementById('webBody').style.display = 'block';
        document.body.style.minHeight = '0';
    }
})


