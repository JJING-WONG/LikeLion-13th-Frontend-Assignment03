document.getElementById('form').addEventListener('submit', function (e) {
  let valid = true; //유효성 통과 여부

  const nameInput = document.querySelector('.name-input'); //이름
  const nameError = nameInput.parentElement.querySelector('.error-message');
  if (nameInput.value.trim() === '') {
    nameInput.style.borderColor = 'red';
    nameError.style.display = 'block';
    valid = false;
  } else {
    nameInput.style.borderColor = 'green';
    nameError.style.display = 'none';
  }

  const emailInput = document.querySelector('.email-input'); //이메일
  const emailError = emailInput.parentElement.querySelector('.error-message');
  if (emailInput.value.trim() === '') {
    emailInput.style.borderColor = 'red';
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailInput.style.borderColor = 'green';
    emailError.style.display = 'none';
  }

  const pwInput = document.querySelector('.password-input'); //비밀번호
  const pwError = pwInput.closest('.input-group').querySelector('.error-message');
  if (pwInput.value.length < 6) {
    pwInput.style.borderColor = 'red';
    pwError.style.display = 'block';
    valid = false;
  } else {
    pwInput.style.borderColor = 'green';
    pwError.style.display = 'none';
  }

  const confirmInput = document.querySelector('.confirm-input'); //비밀번호 확인
  const confirmError = confirmInput.closest('.input-group').querySelector('.error-message');
  if (confirmInput.value !== pwInput.value) {
    confirmInput.style.borderColor = 'red';
    confirmError.style.display = 'block';
    valid = false;
  } else {
    confirmInput.style.borderColor = 'green';
    confirmError.style.display = 'none';
  }

  if (!valid) {
    e.preventDefault();
  } else {
    e.preventDefault();
    const finish = alert('회원가입 완료!');
  }
});

document.querySelectorAll('.toggle-password').forEach(toggle => { //비밀번호 보기
  toggle.addEventListener('click', () => {
    const input = toggle.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      toggle.textContent = '숨기기';
    } else {
      input.type = 'password';
      toggle.textContent = '보기';
    }
  });
});

document.querySelector('.reset').addEventListener('click', function () { //선택과제
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.style.borderColor = '#ccc'; 
  });

  const errors = document.querySelectorAll('.error-message');
  errors.forEach(error => {
    error.style.display = 'none';
  });
});