

export default function modalFormsValidate() {
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('form');
        form.addEventListener('submit', formSubmited);
        console.log(form);
    });
    // formValidate(form);
    // formAddError(form);
    // formRemoveError(form);

}





function formSubmited(e) {
    e.preventDefault();

    let error = formValidate(form);

    console.log(error);
};


function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.form-req');

    for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);

        if (input.classList.contains('form-email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            } else {
                if(input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
         
           
        }

        
    }
   
}


function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
}

function emailTest(input) {
    return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(input.value);
    }
    
