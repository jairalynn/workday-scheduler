$(document).ready (function() {

    var today = 
        moment().format('MMMM Do YYYY');
        console.log(today)
        $("#currentDay").append(today);
    
    })

$(".saveBtn").click(function(event) {
    console.log(event.target);
    console.log($(this).parent().siblings(".text-input").val());
    const inputVal = $(this).parent().siblings(".text-input").val();
    const btnKey = $(this).attr("id");
    localStorage.setItem(btnKey, inputVal);
})

for (var i = 0; i < localStorage.length; i++) {
    const keyName = localStorage.key(i);
    const valContent = localStorage.getItem(localStorage.key(i));
    
    console.log(localStorage.getItem(localStorage.key(i)));
    console.log(localStorage.key(i));
    $("#" + keyName).parent().siblings(".text-input").val(valContent);
}