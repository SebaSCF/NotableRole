$(function() {
    $('#basicExampleModal').modal('show');
});

let i = 1;
function submitHandler() {
                        var Yes = document.getElementById("Yes");
                        var No = document.getElementById("No");

                        var questionElement = document.getElementById("formQuestion");
                        var messageElement = document.getElementById("message1");
                        var successElement = document.getElementById("success");


                        const question = [
                            {
                            message: "We want to make sure we offer relevant products",
                            question: "Do you have any children?",
                                 },
                            {
                            message: "Last question",
                            question: "Do you have any pets?",
                            },
                            {
                            message: "",
                            question: "",

                            }

                        ]

                            if(Yes.checked == true || No.checked == true) {

                                questionElement.innerText = question[i].question
                                messageElement.innerText = question[i].message

                                i++;
                                console.log(i)
                                if(i > 2) {

                                    successElement.style.display = "block";
                                    document.getElementById("YesContainer").style.display = "none";
                                    document.getElementById("NoContainer").style.display = "none";
                                    document.getElementById("btnSubmit").style.display = "none";
                                    document.getElementById("btnClose").style.display = "inline";

                                    }

                            } else {

                                document.getElementById("err").style.display = "block";
                                document.getElementById("btnTryAgain").style.display = "inline";
                                document.getElementById("YesContainer").style.display = "none";
                                document.getElementById("NoContainer").style.display = "none";



                                document.getElementById("formQuestion").style.display = "none";


                                document.getElementById("message1").style.display = "none";

                                document.getElementById("btnSubmit").style.display = "none";
                                document.getElementById("btnComplete").style.display = "none";



                                console.log("err")
                            }



}
function Close() {
    location.reload();
}