
// Notiz: JSON.stringify -> JSON.parse()

const color = {
	textfarbe   : "blue",
	hintergrund : "#E9931A",
    hoehe       : "100px",
    breite      : "100px",
	kombi (elem) {
		elem.style = 
            `background: ${this.hintergrund}; 
            color: ${this.textfarbe}; 
            height: ${this.hoehe};
            width: ${this.breite};` 
	}
};

const element = document.querySelector(".colors")
element.style.border = "1px solid black";
color.kombi(element);
