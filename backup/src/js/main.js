$(document).ready(function() {
    $("#submit").click(function(event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        var nameStatusElm = $("#name-status");
        nameStatusElm.empty();
        var emailStatusElm = $("#email-status");
        emailStatusElm.empty();
        var subjectStatusElm = $("#subject-status");
        subjectStatusElm.empty();
        var messageStatusElm = $("#message-status");
        messageStatusElm.empty();

        if(name.length < 1) {
            event.preventDefault();
            nameStatusElm.append("<div>*please enter a name</div>");
            document.getElementsByName("name")[0].style.border = "1px solid red";
        }

        if(email.length < 5 || !email.includes("@") || !email.includes(".")) {
            event.preventDefault();
            emailStatusElm.append("<div>*please enter a valid email</div>");
            document.getElementsByName("email")[0].style.border = "1px solid red";
        }

        if(subject < 1) {
            event.preventDefault();
            subjectStatusElm.append("<div>*please enter a subject</div>");
            document.getElementsByName("subject")[0].style.border = "1px solid red";
        } 

        if(message < 10) {
            event.preventDefault();
            messageStatusElm.append("<div>*please enter a message</div>");
            document.getElementsByName("message")[0].style.border = "1px solid red";
        }
    })
})

function openNav() {
    navBarOpen = true;
    document.getElementById("sidebar-nav").style.width = "30%";
    document.getElementById("sidebar-nav").style.padding = "1rem 2.5rem";

    document.getElementById("navbar-close").style.width = "100%";
}

function closeNav() {
    document.getElementById("sidebar-nav").style.width = "0%";
    document.getElementById("sidebar-nav").style.padding = "1rem 0rem";

    document.getElementById("navbar-close").style.width = "0%";
}