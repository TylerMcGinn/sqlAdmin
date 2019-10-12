export default class Validation{
    static removeWarnings(focusedField){
        if($(focusedField).hasClass('invalidField')){
            $(focusedField).removeClass('invalidField').removeAttr('placeholder');
        }
    }


    static entriesValid(fieldData){
        let invalidEntries = fieldData.filter(entry=>{
            return entry.value === '';
        });
        for(let entry in invalidEntries){
            let field = invalidEntries[entry].name;
            $(`#${field}`).addClass('invalidField').attr({'placeholder':'Field Required!'});
        }
        return invalidEntries.length === 0 ? true : false;
    }

    
    static formatBirthDate(birthday, key){
        if(key != 'Backspace'){
            if(birthday.val().length == 3 || birthday.val().length == 6){
                let arr = birthday.val().split('');
                let insertIndex = arr.length - 1;
                arr.splice(insertIndex, 0, '/');
                let formatted = arr.join('');
                birthday.val(formatted);
            }
        }
        if(birthday.val().length > 10){
            birthday.val(birthday.val().replace(/.$/, ''));
        }
    }


    static formatPhoneNumber(phoneNumber, key){
        if(key != 'Backspace'){
            if(phoneNumber.val().length == 4 || phoneNumber.val().length == 8){
                let arr = phoneNumber.val().split('');
                let insertIndex = arr.length - 1;
                arr.splice(insertIndex, 0, '-');
                let formatted = arr.join('');
                phoneNumber.val(formatted);
            }
        }
        if(phoneNumber.val().length > 12){
            phoneNumber.val(phoneNumber.val().replace(/.$/, ''));
        }
    }
}