const formData = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {
	email: "",
	message: ""
};

const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.elements.email.value = formData.email;
feedbackForm.elements.message.value = formData.message;

feedbackForm.addEventListener("input", () => {
	formData.email = feedbackForm.elements.email.value.trim();
	formData.message = feedbackForm.elements.message.value.trim();
	localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

feedbackForm.addEventListener("submit", e => {
	e.preventDefault();

	const form = e.target;

	if (formData.email && formData.message) {
		console.log(formData);
		localStorage.clear();
		formData.email = ""
		formData.message = "";
		form.reset();
	} else {
		alert("Fill please all fields");
	}
})