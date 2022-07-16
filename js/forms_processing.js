

export default function modalFormsInit() {



    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contact');
        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();
            let error = formValidation(form);
        }

        function formValidation(form) {
            let error = 0;
            let formRequired = form.querySelectorAll('._required');
            for (let i = 0; i < formRequired.length; i++) {
                const input = formRequired[i];
                formRemoveError(input);
                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
               
                } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value.length === "") {
                        formAddError(input);
                        error++;
                    }
                }
            }
                   
                
        }
      
    
    
        function formAddError(input) {
            input.classList.add('error');
            input.parentElement.classList.add('error');
        }
        function formRemoveError(input) {
            input.classList.remove('error');
            input.parentElement.classList.remove('error');
        }

        function emailTest(input) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(input);

      
        }
    });

}