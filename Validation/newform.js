// helper to set validity styling & message
function setValidation(el, isValid, msg) {
  const span = document.getElementById(el.id + '_validate');
  if (isValid) {
    el.classList.add('valid');
    el.classList.remove('invalid');
    span.textContent = '';
  } else {
    el.classList.add('invalid');
    el.classList.remove('valid');
    span.textContent = msg;
  }
}

// Validators
function validateIP() {
  const ip = document.getElementById('ip');
  const re = /^(25[0-5]|2[0-4]\d|[01]?\d?\d)(\.(25[0-5]|2[0-4]\d|[01]?\d?\d)){3}$/;
  setValidation(ip, re.test(ip.value), 'Invalid IPv4 address');
}

function validateDOB() {
  const dob = document.getElementById('dob');
  if (!dob.value) return setValidation(dob, false, 'Required');
  const birth = new Date(dob.value);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear() - (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ? 1 : 0
  );
  setValidation(dob, age >= 18, 'Must be 18 or older');
}

function validateCar() {
  const car = document.getElementById('car');
  const re = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{1,4}$/;
  setValidation(car, re.test(car.value), 'Use format KA01AB1234');
}

function validateNID() {
  const nid = document.getElementById('nid');
  const re = /^\d{10,13}$/;
  setValidation(nid, re.test(nid.value), '10–13 digits');
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^(\+?88)?01[3-9]\d{8}$/;
  setValidation(phone, re.test(phone.value), 'Invalid BD phone');
}

function validateHex() {
  const hex = document.getElementById('hex');
  const re = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  setValidation(hex, re.test(hex.value), 'Invalid hex code');
}

function validatePassword() {
  const pw = document.getElementById('password');
  const val = pw.value;
  const ok = /[a-z]/.test(val) &&
             /[A-Z]/.test(val) &&
             /[0-9]/.test(val) &&
             /[^A-Za-z0-9]/.test(val) &&
             val.length >= 8;
  setValidation(pw, ok, 'Min 8 chars, lower, upper, digit & special');
}

function validateConfirm() {
  const pw = document.getElementById('password').value;
  const cf = document.getElementById('confirm');
  setValidation(cf, cf.value === pw, 'Passwords do not match');
}

function validatePalindrome() {
  const el = document.getElementById('palindrome');
  const str = el.value.replace(/[\W_]/g, '').toLowerCase();
  const ok = str && str === str.split('').reverse().join('');
  setValidation(el, ok, ok ? '' : 'Not a palindrome');
}

function validateFibonacci() {
  const el = document.getElementById('fibonacci');
  const n = parseInt(el.value, 10);
  const ok = Number.isInteger(n) && n > 0;
  setValidation(el, ok, 'Enter a positive integer');

  const resultDiv = document.getElementById('fib_result');
  if (ok) {
    let a = 0, b = 1, seq = [];
    for (let i = 0; i < n; i++) {
      seq.push(a);
      [a, b] = [b, a + b];
    }
    resultDiv.textContent = `First ${n} Fibonacci: ${seq.join(', ')}`;
  } else {
    resultDiv.textContent = '';
  }
}

// Attach realtime listeners
document.getElementById('ip').addEventListener('input', validateIP);
document.getElementById('dob').addEventListener('input', validateDOB);
document.getElementById('car').addEventListener('input', validateCar);
document.getElementById('nid').addEventListener('input', validateNID);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('hex').addEventListener('input', validateHex);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirm').addEventListener('input', validateConfirm);
document.getElementById('palindrome').addEventListener('input', validatePalindrome);
document.getElementById('fibonacci').addEventListener('input', validateFibonacci);

// On form submit, re-validate all and prevent if any invalid
document.getElementById('myForm').addEventListener('submit', function(e) {
  validateIP();
  validateDOB();
  validateCar();
  validateNID();
  validatePhone();
  validateHex();
  validatePassword();
  validateConfirm();
  validatePalindrome();
  validateFibonacci();

  if (document.querySelectorAll('input.invalid').length > 0) {
    e.preventDefault();
    alert('Please fix errors before submitting.');
  }
});
