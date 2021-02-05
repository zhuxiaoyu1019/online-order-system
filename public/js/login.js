$(document).ready(function () {

    // $(document).on("click", "#register-now", renderRegistrationForm);

    // // const registrationForm = $("#registration-page");
    // const loginForm = $("#login-page");

    // function renderRegistrationForm() {
    //     loginForm.append(RegistrationForm)

    // };

    $(".login-form").submit(event => {
        event.preventDefault();
        $.post("/pizzacutter/login", {
            username: $("#username").val(),
            password: $("#password").val(),
        }).then(data => {
            console.log('logged in!')
            window.location.href = "/pizzacutter/dashboard"
        }).fail(err => {
            console.log("login failed")
            console.log(err);
            alert("login failed!")
        })
    });

    $("#exit-icon").click(() => {
        $.get("/pizzacutter/logout").then(() => {
            console.log("logged out");
            window.location.href = "/pizzacutter"
        })
    });

    // $("#signup").submit(event => {
    //     event.preventDefault();
    //     $.post("/signup", {
    //         username: $("#username").val(),
    //         password: $("#password").val(),
    //     }).then(data => {
    //         console.log('signed up!')
    //         window.location.href = "/"
    //     }).fail(err => {
    //         console.log("signup failed")
    //         console.log(err);
    //         alert("signup failed!")
    //     })
    // })
});