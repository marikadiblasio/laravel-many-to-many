import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

// DELETE

//prendo i buttons
const deleteSubmitButtons = document.querySelectorAll('.delete-button');
//ad ognuno assegno e-listener e e-prevent
deleteSubmitButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        //recupero il data-title
        const dataTitle = button.getAttribute('data-item-title');
        //prendo la modale
        const modal = document.getElementById('deleteModal');
        //assegno modale di bootstrap e relativo show
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
        //inserisco il data-title nel modal title
        const modalItemTitle = modal.querySelector('#modal-item-title');
        modalItemTitle.textContent = dataTitle;
        //prendo il button della modale
        const buttonDelete = modal.querySelector('button.btn-danger');
        //gli assegno e-listener
        buttonDelete.addEventListener('click', () => {
            //e submit del parent
            button.parentElement.submit();
        });
    });
});

//EDIT TYPE
//prendo i bottoni matita
const pencilTypes = document.querySelectorAll('.pencil-type');
//ciclo sui bottoni
pencilTypes.forEach((pencil)=>{
    pencilTypes.addEventListener('click', (e)=>{ //al click
        e.preventDefault();
        //prendo il form
        tdFormEdit = document.getElementById('td-form-edit');
        //lo rendo visibile
        tdFormEdit.classList.add('d-table-cell');
        //prendo il nome
        //lo rendo invisibile

        //prendo il bottone submit edit
        //all'evento submit
        //rendo invisibile il form
        //rendo visibile il nome

    })
})
