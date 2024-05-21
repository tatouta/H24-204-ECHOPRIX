let image = document.getElementById("sign-in-profile-image");
let file = document.getElementById("sign-in-profile-file");



file.onchange = async function(event) {

    event.preventDefault();

    const formData = new FormData();
    const imageFile = file.files[0];
    

    image.src = URL.createObjectURL(file.files[0])
    image.style.display = "block";
    formData.append('image', imageFile);

    try {
        const response = await fetch('/uploadImage', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        console.log(data); // This can be the temporary URL or other response from the server
    } catch (error) {
        console.error('Error uploading image:', error);
    }
};


