var xhr = new XMLHttpRequest();
xhr.open('GET', 'sets.json', true);
xhr.onload = function () {
    if (xhr.status == 200) {
        var res = JSON.parse(xhr.responseText);
        console.log(res.sets[0]);
        var response = prompt("is your birthday in the following set?" + res.sets[0] + " Enter 0 for no and 1 for yes");
        response = prompt("is your birthday in the following set? " + res.sets[1] + " Enter 0 for no and 1 for yes") + response;
        response = prompt("is your birthday in the following set ?" + res.sets[2] + " Enter 0 for no and 1 for yes") + response;
        response = prompt("is your birthday in the following set ?" + res.sets[3] + " Enter 0 for no and 1 for yes") + response;
        response = prompt("is your birthday in the following set ?" + res.sets[4] + " Enter 0 for no and 1 for yes") + response;
        var lastNumber = response != "0000" ? parseInt(response, 2) : 31;
        alert("Your birthday is on day " + lastNumber + " of this month.");
    }
};
xhr.onerror = function () {
    alert("Error: Information entered is invalid.");
};
xhr.send();
