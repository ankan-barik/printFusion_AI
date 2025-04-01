document.addEventListener("DOMContentLoaded", () => {
    const canvas = new fabric.Canvas("productCanvas");
    
    // Add Text to Canvas
    document.getElementById("addTextBtn").addEventListener("click", () => {
        const text = new fabric.IText("Your Text", {
            left: 50,
            top: 50,
            fill: "black",
            fontSize: 20,
        });
        canvas.add(text);
        canvas.setActiveObject(text);
    });
    
    // Change Text Color
    
     
    
    
document.getElementById("clipartBtn").addEventListener("click", function () {
    var colorPicker = document.getElementById("textColorPicker");
    colorPicker.classList.toggle("hidden");
});

// Fix: Ensure text color changes dynamically on selection
document.getElementById("textColorPicker").addEventListener("input", function () {
    var canvas = window.canvas; // Ensure the global canvas reference
    if (canvas) {
        var activeObject = canvas.getActiveObject();
        if (activeObject && (activeObject.type === "text" || activeObject.type === "i-text")) {
            activeObject.set("fill", this.value);
            canvas.renderAll();
        } else {
            alert("Please select a text object to change its color!");
        }
    }
});


    
    
    
      


    
        
    
    
    // Upload Image
    document.getElementById("uploadImageBtn").addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    fabric.Image.fromURL(e.target.result, (img) => {
                        img.scaleToWidth(150);
                        img.scaleToHeight(150);
                        canvas.add(img);
                        canvas.setActiveObject(img);
                    });
                };
                reader.readAsDataURL(file);
            }
        });
        input.click();
    });
    
    // Download Design
    document.getElementById("downloadBtn").addEventListener("click", () => {
        const dataURL = canvas.toDataURL({ format: "png" });
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "custom-product.png";
        link.click();
    });
    
    // Placeholder for AI Design Generation
    document.getElementById("generateAIImageBtn").addEventListener("click", () => {
        alert("AI Design Generation feature coming soon!");
    });
});
