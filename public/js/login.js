$("#login").submit(event => {
    event.preventDefault();
    $.post("/login", {
        username: $("#username").val(),
        password: $("#password").val(),
    }).then(data => {
        console.log('logged in!')
        window.location.href = "/"
    }).fail(err => {
        console.log("login failed")
        console.log(err);
        alert("login failed!")
    })
})
$("#signup").submit(event => {
    event.preventDefault();
    $.post("/signup", {
        username: $("#username").val(),
        password: $("#password").val(),
    }).then(data => {
        console.log('signed up!')
        window.location.href = "/"
    }).fail(err => {
        console.log("signup failed")
        console.log(err);
        alert("signup failed!")
    })
})