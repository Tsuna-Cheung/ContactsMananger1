document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.contacts);
}

$(document).on("pagecreate","#lcpage",function(){
  $('#bt1').on("click", function(){
    onSuccess(contacts);
  });            
});  
$(document).on("pagecreate","#lcpage",function(){
  $('#bt2').on("click", function(){
    createContact();
  });            
});   


function onSuccess(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
            "Family Name: "  + contacts[i].name.familyName      + "\n" +
            "Given Name: "   + contacts[i].name.givenName       + "\n" +
            "Middle Name: "  + contacts[i].name.middleName      + "\n" +
            "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
            "Prefix: "       + contacts[i].name.honorificSuffix);
    }
};

function onError(contactError) {
    alert('onError!');
};

var options = new ContactFindOptions();
options.filter = "";
options.multiple = true;
filter = ["displayName", "name"];
navigator.contacts.find(filter, onSuccess, onError, options);

function createContact(){
    var myContact = navigator.contacts.create({"displayName": "Test User"});
    alert("success!");
}
