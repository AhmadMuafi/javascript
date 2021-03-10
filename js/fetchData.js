document.querySelector("#klik").addEventListener("click", () => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        // .then(function(res) {
        //     return res.json();
        // })
        .then(response => response.json())
        // .then(function(data) {
        //     console.log(data);
        // })
        .then(json => {
            let out = "<ul>"
            json.forEach(element => {
                out += `<li>${element.title}</li>`
            });
            out += "</ul>"
            document.querySelector("#isi").innerHTML = out;
        })
});