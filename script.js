const cardname = document.querySelector(".cname");
const cardnumber = document.querySelector(".cnum");
const month = document.querySelector('.month');
const mnt = document.querySelector('#mnt');
const year = document.querySelector('.year');
const yr = document.querySelector('#yr');
const digit = document.querySelector('.digit');
const name = document.querySelector('.cadname');
const confirm = document.querySelector('.confirm');
const form = document.querySelector('#form');
const cvc = document.querySelector('.cvc')
const num = document.querySelector('.num')
const error = document.getElementById("error");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const done = document.getElementsByClassName("done")[0];
const continue1 = document.getElementById("continue");

continue1.addEventListener('click', e => {
    // window.location.reload();
    yr.innerText = "00";
    mnt.innerText = "00";
    num.innerText = "000";
    digit.innerText = cardnumber.value;
    name.innerText = "Jane Appleseed";
    digit.innerText = "0000 0000 0000 0000";
    form.style.display = "block";
    done.style.display = "none";
    // cardname.innerText = " ";
    // cardnumber.innerText = " ";
    // month.value.innerText = " ";
    // year.innerText = " ";
})


cardname.addEventListener('input', (e) => {
    if (e.target.value.length < 1) {
        name.innerText = "Jane Appleseed";
        return;
    }

})

cardnumber.addEventListener('input', (e) => {
    if (e.target.value.length < 1) {
        digit.innerText = "0000 0000 0000 0000";
        return;
    }
    if (e.target.value.length > cardnumber.maxLength) {
        cardnumber.value = cardnumber.value.slice(0, cardnumber.maxLength)
        return;
    }
    cardnumber.value = e.target.value;
    cardnumber.value.length < 16 ? (error.innerText = "card numbers must be 16") : (error.innerText = "");
    cardnumber.style.border = "1px solid #d4d4d4";
    cardnumber.style.borderRadius = "5px";
});

const format = (str) => str.match(/.{1,4}/g).join(" ");
let state = false;
cardnumber.addEventListener('mouseout', (e) => {
    if (state) return;
    cardnumber.value = format(cardnumber.value);
    state = true;
});



month.addEventListener('input', (e) => {
    if (e.target.value.length < 1) {
        mnt.innerText = "00";
        return;
    }
});

year.addEventListener('input', (e) => {
    if (e.target.value.length < 1) {
        yr.innerText = "00";
        return;
    }
});

confirm.addEventListener('click', (e) => {
    e.preventDefault();
    let regex = /^[0-9]+$/;
    if (!cardnumber.value.split(" ").join("").match(regex)) {
        cardnumber.style.border = "1px solid red";
        cardnumber.style.borderRadius = "5px";
        error.innerText = "Wrong format, numbers only";
        return;
    } else {
        cardnumber.style.border = "1px solid #d4d4d4";
        cardnumber.style.borderRadius = "5px";
        error.innerText = "";
    }
    if (month.value.length < 1) {
        month.style.border = "1px solid red";
        year.style.border = "1px solid red";
        month.style.borderRadius = "5px";
        error1.innerText = "Can't be blank!!!"
        return;
    } else {
        month.style.border = "1px solid #d4d4d4";
        year.style.border = "1px solid #d4d4d4";
        month.style.borderRadius = "5px";
        error1.innerText = ""
    }
    if (year.value.length < 1) {
        month.style.border = "1px solid red";
        year.style.border = "1px solid red";
        month.style.borderRadius = "5px";
        error1.innerText = "Can't be blank!!!";
        return;
    } else {
        month.style.border = "1px solid #d4d4d4";
        year.style.border = "1px solid #d4d4d4";
        month.style.borderRadius = "5px";
        error1.innerText = ""
    }
    if (cvc.value.length < 1) {
        cvc.style.border = "1px solid red";
        cvc.style.borderRadius = "5px";
        error2.innerText = "Cant be blank!!!"
        return;
    } else {
        cvc.style.border = "1px solid #d4d4d4";
        cvc.style.borderRadius = "5px";
        error2.innerText = ""
    }

    yr.innerText = year.value.length < 1 ? "00" : year.value;
    mnt.innerText = month.value.length < 1 ? "00" : month.value;
    num.innerText = cvc.value.length < 1 ? "000" : cvc.value;
    digit.innerText = cardnumber.value;
    name.innerText = cardname.value.length < 1 ? "Jane Appleseed" : cardname.value;
    form.style.display = "none";
    done.style.display = "flex";
})