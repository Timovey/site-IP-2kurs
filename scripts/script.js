const formElem = document.forms[0];

formElem.addEventListener('submit', function(event) {
    event.preventDefault();
  
    new FormData(formElem);

  });


formElem.addEventListener("formdata", event => {
  const data = event.formData;

  const entries = [...data.entries()];
  console.log(entries);

  const values = [...data.values()];
  console.log(values);

  Swal.fire({
    icon: 'success',
    title: 'done',
    text: 'Данные отправлены',
  });
  console.log("Все норм, данные отправлены");
});