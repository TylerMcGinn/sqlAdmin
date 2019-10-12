export default class Modal{
    static initializeEditUserModal(){
        $('#new-user-title').css({'display':'none'});
        $('#add-user-btn').css({'display':'none'});
        $('#edit-user-title').css({'display':'initial'});
        $('#update-user-btn').css({'display':'initial'});
        $('#delete-user-btn').css({'display':'initial'});
        $('#userAdmin').modal();
        setTimeout(() => {
            $('#first_name').focus();
        }, 200);
    }


    static initializeAddUserModal(){
        $('.form-field').val('');
        $('#edit-user-title').css({'display':'none'});
        $('#update-user-btn').css({'display':'none'});
        $('#delete-user-btn').css({'display':'none'});
        $('#new-user-title').css({'display':'initial'});
        $('#add-user-btn').css({'display':'initial'});
        $('#userAdmin').modal();
        setTimeout(() => {
            $('#first_name').focus();
        }, 200);
    }


    static populateFormFields(row){
        for(let i=0; i<row.length; i++){
            let targetField = row[i].classList[0];
            let fieldvalue = row[i].innerText;
            $(`#${targetField}`).val(fieldvalue);
        }
    }
}