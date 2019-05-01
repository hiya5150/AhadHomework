var xhr = new XMLHttpRequest();
xhr.open('GET', 'sets.json', true);
xhr.onload = function () {
    if (xhr.status == 200) {
        var res = JSON.parse(xhr.responseText);
        var response = prompt("is your birthday in the following set" + res.set1 + "Enter 0 for no and 1 for yes");
        response = prompt("is your birthday in the following set ? " + res.set2 + "Enter 0 for no and 1 for yes") + response;
        response = prompt("is your birthday in the following set ?" + res.set3 + "Enter 0 for no and 1 for yes") + response;
        response = prompt("is your birthday in the following set ?" + res.set4 + "Enter 0 for no and 1 for yes") + response;
        response = prompt("is your birthday in the following set ?" + res.set5 + "Enter 0 for no and 1 for yes") + response;
        var lastNumber = response != "0000" ? parseInt(response, 2) : 31;
        alert("Your birthday is on day " + lastNumber + " of this month.");
    }
};
xhr.onerror = function () {
    alert("Error: Information entered is invalid.");
};
xhr.send();
