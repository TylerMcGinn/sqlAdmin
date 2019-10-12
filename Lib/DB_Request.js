import Modal from './Modal.js.js';

export default class DB_Request{
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
                console.log(res);
                
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
