const submit = document.querySelector('.submit');
const form = document.querySelector('.form');
const fName = document.querySelector('.fName');
const lName = document.querySelector('.lName');
const address = document.querySelector('.address');
const city = document.querySelector('.city');
const state = document.querySelector('.state');
const country = document.querySelector('.country');
const pincode = document.querySelector('.pincode');
const gender = document.querySelectorAll('input[name=gender]');
const food = document.querySelectorAll('input[type=checkbox]');

const table = document.querySelector('table');







let firstName, lastName, add, cityName, stateName, countryName, pin, sex;
let likedFood = [];

const reset = () => {
    fName.value = '';
    lName.value = '';
    address.value = '';
    city.value = '';
    state.value = '';
    country.value = '';
    pincode.value = '';

    likedFood =[];

    gender.forEach(v => {
        if (v.checked === true) {
            v.checked = false;
        };
    });

    food.forEach(v => {
        if (v.checked === true) {
            v.checked = false;
        };

    })

}



submit.addEventListener('click', (e) => {

    // e.preventDefault();

    firstName = fName.value;
    lastName = lName.value;
    add = address.value;
    cityName = city.value;
    stateName = state.value;
    countryName = country.value;
    pin = pincode.value;


    gender.forEach(v => {
        if (v.checked === true) {
            sex = v.className
            sex = sex.charAt(0).toUpperCase() + sex.slice(1);
        };
    });

    food.forEach(v => {
        if (v.checked === true) {
            likedFood.push(v.value);
        };

    })


    if (firstName && lastName && add && cityName && stateName && countryName && pin && sex && food && likedFood.length >= 2) {

        table.insertAdjacentHTML('beforeend', `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${sex}</td>
    <td>${likedFood.join(', ')}</td>
    <td>${add}</td>
    <td>${cityName}</td>
    <td>${stateName}</td>
    <td>${countryName}</td>
    <td>${pin}</td>
   
    </tr>`)


        reset();
    } else {
        alert(`
         Please check have you entered all details.
         Make sure you have entered all details.
         Atleast you should select two foods to proceed further.
        `)
    }

});