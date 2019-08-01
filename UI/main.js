
const signUpName = document.querySelector('.sign-up-name');
const signUpFirstName = document.querySelector('#signUpFirstName');
const signUpLastName = document.querySelector('#signUpLastName');
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const submitButton = document.querySelector('#signUpButton');
const msg = document.querySelector('.msg');

const submitForm = () => {
	const submitdata = document.querySelector('#signUpButton');
	submitdata.innerHTML = '';

	const data = JSON.stringify({
		firstname: signUpFirstName.value,
		lastname: signUpLastName.value,
		email: signUpEmail.value,
		password: signUpPassword.value,
	});
	fetch('http://localhost:3000/signup',
		{
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: data
		})
		.then(res => res.json())
		.then(() => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
};


submitButton.addEventListener('click', onclick);
onclick = (event) => {
	event.preventDefault();
	if (signUpPassword.value !== confirmPassword.value) {
		msg.classList.add('error');
		msg.innerHTML = 'Password do not match';
	} else if (typeof signUpName !== 'string') {
		msg.classList.add('error');
		msg.innerHTML = 'Name input should be a string';
	} else {
		submitForm();
	}
};
