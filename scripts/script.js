const formElem = document.forms[0];

formElem.addEventListener('submit', function(event) {
    event.preventDefault();
  
    new FormData(formElem);

  });


formElem.addEventListener("formdata", event => {
  const data = event.formData;

  const entries = [...data.entries()];
  const values = [...data.values()];
  if(validate(values[0])) {
    console.log(entries);
    console.log(values);
  
    Swal.fire({
      icon: 'success',
      title: 'done',
      text: 'Данные отправлены',
    });
    console.log("Все норм, данные отправлены");
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Что-то пошло не так',
      text: 'Неправильно указан номер',
    });
    console.log("Все плохо, данные не отправлены");
  }

  
});


function validate(tel){
  let sub = "+7";

  if (!tel.includes(sub)){
      Swal.fire({
          icon: 'error',
          title: 'Что-то пошло не так',
          text: 'Неправильно указан номер',
        });
        console.log("Косяк в номере");
      return false;
  }
  else{
      return true;
  }
}