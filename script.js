const inputFile = document.querySelector("#img");
const pictureImage = document.querySelector(".picture__image");

pictureImage.innerHTML = "Insira a imagem";

inputFile.addEventListener("change", function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        pictureImage.innerHTML = "";
        const reader = new FileReader();

        reader.addEventListener("load", function(e){
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.classList.add('picture__img');
            img.src = readerTarget.result;

            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });
        reader.readAsDataURL(file)
    } else 
        pictureImage.innerHTML = "Insira a imagem";
})