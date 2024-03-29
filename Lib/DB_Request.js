import Modal from './Modal.js';

export default class DB_Request{

    static selectedUserState = { name:'id', value:null };


    static unsetSelectedUserState(){
        this.selectedUserState = { name:'id', value:null };
    }


    static searchUsers(query){
        if($('#searchUsers').val() != ''){
            $.ajax({
                method:'POST',
                url:'./Server/searchUsers.php',
                data:query,
                success:function(res){
                    $('tbody').children().remove();
                    $('tbody').append(res);
                }
            });
            setTimeout(() => {
                this.attatchEventListeners()
            }, 200);
        }
        else{
            this.getAllUsers();
        }
    }


    static getAllUsers(){
        $.ajax({
            method:'GET',
            url:'./Server/getAllUsers.php',
            success:function(res){
                $('tbody').children().remove();
                $('tbody').append(res);
            }
        });
        setTimeout(() => {
            this.attatchEventListeners();
        }, 200);
    }


    static addNewUser(formData){
        $.ajax({
            method:"POST",
            url:"./Server/addUser.php",
            data:formData,
            success:function(res){
                res == "success" ? Modal.alertMessage("Success","User added successfully", "alert-success")
                                 : Modal.alertMessage("Error", res, "alert-danger");
            }
        });
        $('#userAdmin').modal('hide');
        setTimeout(() => {
            this.getAllUsers();
        }, 500);
    }


    static updateUser(formData){
        formData.unshift(this.selectedUserState);
        console.log(formData);
        $.ajax({
            method:'POST',
            url:'./Server/updateUser.php',
            data:formData,
            success:function(res){
                res == "success" ? Modal.alertMessage("Success","User updated successfully", "alert-success")
                                 : Modal.alertMessage("Error", res, "alert-danger");
            }
        });
        $('#userAdmin').modal('hide');
        setTimeout(() => {
            this.getAllUsers();
        }, 500);
    }


    static deleteUser(){
        $.ajax({
            method:'POST',
            url:'./Server/deleteUser.php',
            data:[this.selectedUserState],
            success:function(res){
                res == "success" ? Modal.alertMessage("Success","User deleted successfully", "alert-success")
                                 : Modal.alertMessage("Error", res, "alert-danger");
            }
        });
        $('#userAdmin').modal('hide');
        setTimeout(() => {
            this.getAllUsers();
        }, 500);
    }


    static attatchEventListeners(){
        $('tr').click(function(){
            let selectedUser = $(this).children();
            Modal.populateFormFields(selectedUser);
            Modal.initializeEditUserModal();
        });
    }
}
