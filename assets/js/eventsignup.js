document.getElementById("eventSignup").addEventListener("submit", eventSignUp);

function eventSignUp(e) {
    e.preventDefault();

    let id = Math.floor(Math.random() * 10000000);
    let fullname = document.querySelector('#fullname').value;
    let studentId1 = document.querySelector('#myId').value;

    firebase.database().ref('cleanUp/' + id).set({
        signUpId: id,
        fullname: fullname,
        studentId: studentId1
    });

    swal({
        title: "Clean-up Exercise",
        text: "Sign Up Successful",
        icon: "success",
        button: "Return to Profile"
    }).then(function () {
        window.location.reload();
    })
}