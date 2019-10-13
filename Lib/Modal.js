import DB_Request from './DB_Request.js';

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
        DB_Request.selectedUserState = { name:'id', value:row[0].innerText };
        for(let i=1; i<row.length; i++){
            let targetField = row[i].classList[0];
            let fieldvalue = row[i].innerText;
            $(`#${targetField}`).val(fieldvalue);
        }
    }


    static alertMessage(alertContext, alertMessage, alertClass = 'alert-warning'){
        let alertTemplate = `<div class='alert ${alertClass} alert-dismissible show' role='alert'>` +
                            `<strong>${alertContext}!</strong> ${alertMessage}.` +
                            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                            "<span aria-hidden='true'>&times;</span>" +
                            "</button>" +
                            "</div>";
        $('.message-container').children().remove();
        $('.message-container').append(alertTemplate);
    }
}