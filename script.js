let btn = document.getElementById("themebtn");

if (btn) {
    btn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            btn.innerText = "Dark Mode";
        } else {
            btn.innerText = "Light Mode";
        }
    });
}


const emailInput = document.getElementById("user");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {
    if (!emailInput.value.includes("@")) {
         emailError.textContent = "Email should contain @";
        } else {
            emailError.textContent = "";
    }
});

(function () {
    const passwordInput = document.getElementById('password');
    const passError = document.getElementById('passError');
    const loginForm = document.getElementById('loginForm');

    function hasSpecialChar(s) {
        if (!s) return false;
        return /[^A-Za-z0-9]/.test(s);
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', function () {
            if (passwordInput.value === '') {
                if (passError) passError.textContent = '';
                return;
            }
            if (!hasSpecialChar(passwordInput.value)) {
                if (passError) passError.textContent = 'Password should include at least one special character.';
            } else {
                if (passError) passError.textContent = '';
            }
        });
    }
})();


