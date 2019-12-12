textarea = document.getElementsByTagName("textarea")[0]
button = document.getElementById("button")
html = document.getElementsByClassName("post_php")[0]

textarea.value = ""

window.onload = function actus(){
    var request2 = new XMLHttpRequest();
    request2.open('POST', 'php/main.php', true);
    request2.send();
    request2.onreadystatechange = function()
    {
        if (request2.readyState === 4) {
            html.innerHTML = request2.responseText
        }
    }
}

button.onclick = function(){
    button.style = ""
    var formData = new FormData();
    formData.set("upload", "TRUE");
    formData.set("text", textarea.value);

    var request = new XMLHttpRequest();
    request.open('POST', 'php/post.php', true);
    request.send(formData);
    request.onreadystatechange = function()
    {
        if (request.readyState === 4) {
            if(request.responseText == "ok") {
                button.style = "animation-duration:2s;animation-name:correct;animation-iteration-count:1;animation-direction:alternate";
                textarea.value = "";
                var request2 = new XMLHttpRequest();
                request2.open('POST', 'php/main.php', true);
                request2.send();
                request2.onreadystatechange = function()
                {
                    if (request2.readyState === 4) {
                        html.innerHTML = request2.responseText
                    }
                }
            }
            else {
                button.style = "animation-duration:2s;animation-name:incorrect;animation-iteration-count:1;animation-direction:alternate";
            }
        }
    }
}