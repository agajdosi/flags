var canvas = this.__canvas = new fabric.StaticCanvas('c');
var bg = [];

window.onload = onLoad()

//setCrossBG();
//setFourHorizonsBG();
//setFourVerticalsBG();
//setSquaresBG();

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
function setBG(bgType){
    console.log("lol")
    if (bgType == "cross") {
        setCrossBG();
    } else if (bgType =="squares") {
        setSquaresBG();
    } else if (bgType == "fourH") {
        setFourHorizonsBG();
    } else if (bgType == "fourV") {
        setFourVerticalsBG();
    }
}

function setCrossBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 800 000 L 400 200 z'));
    bg.push(new fabric.Path('M 000 400 L 400 200 L 000 000 z'));
    bg.push(new fabric.Path('M 000 400 L 400 200 L 800 400 z'));
    bg.push(new fabric.Path('M 800 400 L 400 200 L 800 000 z'));
    bg[0].set({ fill: document.getElementById("bg-color-1").value});
    bg[1].set({ fill: document.getElementById("bg-color-2").value});
    bg[2].set({ fill: document.getElementById("bg-color-3").value});
    bg[3].set({ fill: document.getElementById("bg-color-4").value});
    canvas.add(bg[0]);
    canvas.add(bg[1]);
    canvas.add(bg[2]);
    canvas.add(bg[3]);
}

function setSquaresBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 400 000 L 400 200 L 000 200 z'));
    bg.push(new fabric.Path('M 000 200 L 400 200 L 400 400 L 000 400 z'));
    bg.push(new fabric.Path('M 400 200 L 800 200 L 800 400 L 400 400 z'));
    bg.push(new fabric.Path('M 400 000 L 800 000 L 800 200 L 400 200 z'));
    bg[0].set({ fill: document.getElementById("bg-color-1").value});
    bg[1].set({ fill: document.getElementById("bg-color-2").value});
    bg[2].set({ fill: document.getElementById("bg-color-3").value});
    bg[3].set({ fill: document.getElementById("bg-color-4").value});
    canvas.add(bg[0]);
    canvas.add(bg[1]);
    canvas.add(bg[2]);
    canvas.add(bg[3]);
}

function setFourHorizonsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 200 L 000 300 L 800 400 L 800 200 z'));
    bg.push(new fabric.Path('M 000 300 L 000 400 L 800 400 L 800 300 z'));
    bg.push(new fabric.Path('M 000 100 L 000 200 L 800 200 L 800 100 z'));
    bg.push(new fabric.Path('M 000 000 L 000 100 L 800 100 L 800 000 z'));
    bg[0].set({ fill: document.getElementById("bg-color-1").value});
    bg[1].set({ fill: document.getElementById("bg-color-2").value});
    bg[2].set({ fill: document.getElementById("bg-color-3").value});
    bg[3].set({ fill: document.getElementById("bg-color-4").value});
    canvas.add(bg[0]);
    canvas.add(bg[1]);
    canvas.add(bg[2]);
    canvas.add(bg[3]);
}

function setFourVerticalsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 000 400 L 200 400 L 200 000 z'));
    bg.push(new fabric.Path('M 400 000 L 400 400 L 600 400 L 600 000 z'));
    bg.push(new fabric.Path('M 600 000 L 600 400 L 800 400 L 800 000 z'));
    bg.push(new fabric.Path('M 200 000 L 200 400 L 400 400 L 400 000 z'));
    bg[0].set({ fill: document.getElementById("bg-color-1").value});
    bg[1].set({ fill: document.getElementById("bg-color-2").value});
    bg[2].set({ fill: document.getElementById("bg-color-3").value});
    bg[3].set({ fill: document.getElementById("bg-color-4").value});
    canvas.add(bg[0]);
    canvas.add(bg[1]);
    canvas.add(bg[2]);
    canvas.add(bg[3]);
}

// CONTROLS

function setBGColor(number, color){
    bg[Number(number)].set('fill', color);
    canvas.requestRenderAll();
}

function randomize(){
    colorOne = Math.floor((Math.random() * 11));
    colorTwo = Math.floor((Math.random() * 11));
    document.getElementById("bg-color-1").selectedIndex = colorOne;
    document.getElementById("bg-color-2").selectedIndex = colorTwo;
    document.getElementById("bg-color-3").selectedIndex = colorOne;
    document.getElementById("bg-color-4").selectedIndex = colorTwo;

    bgFormat = Math.floor((Math.random() * 4))
    document.getElementById("bg-format").selectedIndex = bgFormat;
    document.getElementById("bg-format").onchange()
}

function onLoad(){
    randomize()
}