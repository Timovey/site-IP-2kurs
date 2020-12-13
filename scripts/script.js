$(document).ready(()=>{
    $('form').submit((event)=>{
        let tel = $('#inputTel3').val();
        let name = $('#inputName3').val();
        let family = $('#inputFamily3').val();
        let pit = $('#inlineFormCustomSelect').val();
        event.preventDefault();
        if(validate(tel, name, family, pit)){
            Swal.fire({
                icon: 'success',
                title: 'done',
                text: 'Данные отправлены',
              });
              console.log("Все норм, данные отправлены");
        }
        else {
            console.log("Кто-то накосячил");
        };
        
    });
});

function validate(tel, name, family, pit){
    let sub = "+7";
    if ((empty(name)||empty(family)||empty(pit))){
        Swal.fire({
            icon: 'error',
            title: 'Что-то пошло не так',
            text: 'Заполните поля',
          });
          console.log("Косяк в пустых полях");
        return false;
    }
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

function empty(znach){
 if (znach == ""){
     return true;
 }
 else{
     return false;
 }
}

