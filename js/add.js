var canvas = this.__canvas = new fabric.StaticCanvas('c');
var bg = [];

window.onload = onLoad()

function addForm(){
    image = canvas.toDataURL("image/png");
    
    form = document.getElementById('flagform');
    form.method = "post";
    
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = "image";
    hiddenField.value = image;
    form.appendChild(hiddenField);

    document.body.appendChild(form);

    form.submit();
}

// BACKGROUNDS
function setBG(){
    bgType = document.getElementById("bg-format").value
    bg = []
    if (bgType == "cross") {
        bg = getCrossBG();
    } else if (bgType =="squares") {
        bg = getSquaresBG();
    } else if (bgType == "fourH") {
        bg = getFourHorizonsBG();
    } else if (bgType == "fourV") {
        bg = getFourVerticalsBG();
    } else if (bgType == "threeH") {
        bg = getThreeHorizonsBG();
    } else if (bgType == "threeV") {
        bg = getThreeVerticalsBG();
    } else if (bgType == "circle") {
        bg = getCircleBG();
    } else if (bgType == "triangle") {
        bg = getTriangleBG();
    } else if (bgType == "threetriangles") {
        bg = getThreeTrianglesBG();
    }


    l = bg.length;
    for (var i = 0; i < l; i++) {
        y = i % 4;
        colorID = "bg-color-" + y;
        
        if (bg[i] != "") {
            console.log(bg[i])
            bg[i].set({ fill: document.getElementById(colorID).value});
            canvas.add(bg[i]);
        }
    }
}

function getCrossBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 800 000 L 400 200 z'));
    bg.push(new fabric.Path('M 000 400 L 400 200 L 000 000 z'));
    bg.push(new fabric.Path('M 000 400 L 400 200 L 800 400 z'));
    bg.push(new fabric.Path('M 800 400 L 400 200 L 800 000 z'));
    return bg
}

function getSquaresBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 400 000 L 400 200 L 000 200 z'));
    bg.push(new fabric.Path('M 000 200 L 400 200 L 400 400 L 000 400 z'));
    bg.push(new fabric.Path('M 400 200 L 800 200 L 800 400 L 400 400 z'));
    bg.push(new fabric.Path('M 400 000 L 800 000 L 800 200 L 400 200 z'));
    return bg
}

function getFourHorizonsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 200 L 000 300 L 800 400 L 800 200 z'));
    bg.push(new fabric.Path('M 000 300 L 000 400 L 800 400 L 800 300 z'));
    bg.push(new fabric.Path('M 000 100 L 000 200 L 800 200 L 800 100 z'));
    bg.push(new fabric.Path('M 000 000 L 000 100 L 800 100 L 800 000 z'));
    return bg
}

function getFourVerticalsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 000 400 L 200 400 L 200 000 z'));
    bg.push(new fabric.Path('M 400 000 L 400 400 L 600 400 L 600 000 z'));
    bg.push(new fabric.Path('M 600 000 L 600 400 L 800 400 L 800 000 z'));
    bg.push(new fabric.Path('M 200 000 L 200 400 L 400 400 L 400 000 z'));
    return bg
}

function getThreeHorizonsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 800 000 L 800 133 L 000 133 z'));
    bg.push(new fabric.Path('M 000 133 L 800 133 L 800 266 L 000 266 z'));
    bg.push(new fabric.Path('M 000 266 L 800 266 L 800 400 L 000 400 z'));
    return bg
}

function getThreeVerticalsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 267 000 L 267 400 L 000 400 z'));
    bg.push(new fabric.Path('M 267 000 L 534 000 L 534 400 L 267 400 z'));
    bg.push(new fabric.Path('M 534 000 L 800 000 L 800 400 L 534 400 z'));
    return bg
}

function getCircleBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 800 000 L 800 400 L 000 400 z'));
    bg.push(new fabric.Circle({
        radius: 150,
        left: 250,
        top: 50
    }));
    return bg
}

function getTriangleBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 800 000 L 800 400 L 000 400 z'));
    bg.push(new fabric.Path('M 000 000 L 800 200 L 000 400 z'));
    return bg
}

function getThreeTrianglesBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 800 000 L 800 400 L 000 400 z'));
    bg.push(new fabric.Path('M 000 000 L 800 066 L 000 133 z'));
    bg.push("");
    bg.push(new fabric.Path('M 000 133 L 800 200 L 000 266 z'));
    bg.push("");
    bg.push(new fabric.Path('M 000 266 L 800 333 L 000 400 z'));
    return bg
}

// CONTROLS
function randomize(){
    colorOne = Math.floor((Math.random() * 11));
    var colorTwo;
    while (true) {
        colorTwo = Math.floor((Math.random() * 11));
        if (colorOne != colorTwo) {
            break;
        }
    }
    
    document.getElementById("bg-color-0").selectedIndex = colorOne;
    document.getElementById("bg-color-1").selectedIndex = colorTwo;
    document.getElementById("bg-color-2").selectedIndex = colorOne;
    document.getElementById("bg-color-3").selectedIndex = colorTwo;

    bgFormat = Math.floor((Math.random() * 4))
    document.getElementById("bg-format").selectedIndex = bgFormat;
    document.getElementById("bg-format").onchange()
}

function onLoad(){
    randomize()
    document.getElementById("bg-format").selectedIndex = 1;
    document.getElementById("bg-format").onchange()
}