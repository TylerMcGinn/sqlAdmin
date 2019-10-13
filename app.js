import DB_Request from './Lib/DB_Request.js';
import Validation from './Lib/Validation.js';
import Modal from './Lib/Modal.js';


//initialize database, eventlisteners and bootstrap tooltips
$(document).ready(function(){
    $("[data-toggle='tooltip']").tooltip();
    DB_Request.getAllUsers();
    DB_Request.attatchEventListeners();
});


//open add user modal
$('#add-user-modal-btn').click(function(){
    Modal.initializeAddUserModal();
});


//Update selected user
$('#update-user-btn').click(function(e){
    let formData = $('#newUserForm').serializeArray();
    if(Validation.entriesValid(formData)){
        DB_Request.updateUser(formData);
    }
});


//Delete selected user
$('#delete-user-btn').click(function(){
    DB_Request.deleteUser();
});


$('#close-modal-btn').click(function(){
    DB_Request.unsetSelectedUserState();
});


//close message
$('#close-message').click(function(){
   $('#message').addClass('fade').alert('close'); 
});


//remove invalid field warning on focus
$('input').focus(function(e){
    let field = e.currentTarget;
    Validation.removeWarnings(field);
});


//birth date formatter
$('#dob').keyup(function(e){
    let dob = $(this);
    let keyPressed = e.key;
    Validation.formatBirthDate(dob, keyPressed);
});


//phone number formatter
$('#phone').keyup(function(e){
    let phone = $(this);
    let keyPressed = e.key;
    Validation.formatPhoneNumber(phone, keyPressed);
});


// new user form validation and submit.
$('#add-user-btn').click(function(e){
    let formData = $('#newUserForm').serializeArray();
    if(Validation.entriesValid(formData)){
        DB_Request.addNewUser(formData);
    }
});


//user search
$('#searchUsers').keyup(function(){
    let searchQuery = $('#search-users').serializeArray();
    DB_Request.searchUsers(searchQuery);
});