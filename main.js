const BASE_URL = 'https://cart-royal-api.onrender.com';

const Login = async (el) => {
  const [email, password] = el;

  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  document.location.replace('/');

  console.log(email.value, password.value);

  const res = await response.json();
  console.log(res);
  alert(res.msg);
};

const SignUp = async (el) => {
  const [email, password] = el;

  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  document.location.replace('./login.html');
  const res = await response.json();
  console.log(res);
  alert(res.msg);
};
