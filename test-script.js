const fileUpload = document.getElementById("fileUpload");
    const fileUploadText = document.getElementById("fileUploadText");
    const deleteFile = document.getElementById("deleteFile");

    fileUpload.addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = () => {
            if (fileInput.files.length > 0) {
                fileUpload.classList.add("has-file");
                fileUploadText.textContent = fileInput.files[0].name;
            }
        };
        fileInput.click();
    });

    fileUpload.addEventListener("dragover", (event) => {
        event.preventDefault();
        fileUpload.classList.add("dragover");
    });

    fileUpload.addEventListener("dragleave", () => {
        fileUpload.classList.remove("dragover");
    });

    fileUpload.addEventListener("drop", (event) => {
        event.preventDefault();
        fileUpload.classList.remove("dragover");
        const file = event.dataTransfer.files[0];
        if (file) {
            fileUpload.classList.add("has-file");
            fileUploadText.textContent = file.name;
        }
    });

    deleteFile.addEventListener("click", () => {
        fileUpload.classList.remove("has-file");
        fileUploadText.textContent = "Завантажити фото товару";
    });