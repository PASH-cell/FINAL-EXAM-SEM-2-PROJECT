document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".submission-form");

  if (form) {
    const inputFields = Array.from(form.querySelectorAll("input"));
    const textareas = Array.from(form.querySelectorAll("textarea"));
    const allFields = [...inputFields, ...textareas];
    const submitBtn = form.querySelector("button[type='submit']");

    inputFields.forEach((field, index) => {
      field.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === "ArrowDown") {
          e.preventDefault();
          const nextField = allFields[index + 1];
          if (nextField) nextField.focus();
          else if (submitBtn) submitBtn.focus();
        }

        if (e.key === "ArrowUp") {
          e.preventDefault();
          const prevField = allFields[index - 1];
          if (prevField) prevField.focus();
        }
      });
    });

    textareas.forEach((field, index) => {
      field.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
          const prevField = allFields[inputFields.length + index - 1];
          if (prevField) {
            e.preventDefault();
            prevField.focus();
          }
        }
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const empty = allFields.some((el) => !el.value.trim());
      if (empty) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      alert("Submission received!");
      form.reset();
      allFields[0].focus();
    });
  }
});
