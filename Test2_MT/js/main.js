// NOTE: I did not get to use jquery because I used bootstrap. 
// However, this was the code I intended to use for my drop down forms.

$(document).ready(() => 
{ 
    $('#signup').on('click', () => {
        $('#signup-form').toggle(); 
       });

    $('#contact').on('click', () => {
        $('#contact-form').toggle(); 
       });
});


