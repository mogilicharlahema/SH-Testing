export function isValidEmailTextPattern(emailText) {
    const check = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return check.test(emailText);
}

export function isValidPasswordPattern(passwordText) {
    return /.{8,}/.test(passwordText)
        && /\d/.test(passwordText)
        && /[A-Z]/.test(passwordText)
        && /[@$!%*?^&#]/.test(passwordText)
}

export function isValidNumberPattern(numberText) {
    const check = /^[0-9]+$/;
                  /^\d{10}$/;
    return check.test(numberText);
}

