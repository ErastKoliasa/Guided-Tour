(() => {
    const form = document.querySelector(".contact-us__form");
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("contact-form-status");
      fetch(event.target.action, {
        method: form.method,
        body: JSON.stringify({
            name: document.querySelector('#contact-us__input-name').value,
            phone: document.querySelector('#contact-us__input-tel').value,
            email: document.querySelector('#contact-us__input-email').value,
            date: document.querySelector('#contact-us__input-date').value,
            
        }),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit);
})();