import './style.css';
import addUser from "./modules/adduser.js";

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    addUser(nameInput, scoreInput);
});
