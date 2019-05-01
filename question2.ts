let xhr = new XMLHttpRequest();
xhr.open('GET', 'sets.json', true);

xhr.onload = function(): void {
    if (xhr.status == 200) {
        let res: any = JSON.parse(xhr.responseText);


let response: string = prompt("is your birthday in the following set" + res.set1 + "Enter 0 for no and 1 for yes");
response = prompt("is your birthday in the following set ? " + res.set2 + "Enter 0 for no and 1 for yes") + response;
response = prompt("is your birthday in the following set ?" + res.set3 + "Enter 0 for no and 1 for yes") + response;
response = prompt("is your birthday in the following set ?" + res.set4 + "Enter 0 for no and 1 for yes") + response;
response = prompt("is your birthday in the following set ?" + res.set5 + "Enter 0 for no and 1 for yes") + response;


let lastNumber: number = response != "0000" ? parseInt(response, 2) : 31;
alert("Your birthday is on day " + lastNumber + " of this month.");

    }
}

xhr.onerror = function(): void {
    alert("Error: Information entered is invalid.");
}

xhr.send();


