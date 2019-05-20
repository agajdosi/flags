var canvas = this.__canvas = new fabric.StaticCanvas('c');

var bg = [];

//setCrossBG();
//setFourHorizonsBG();
//setFourVerticalsBG();
setSquaresBG();

function postForm(){
    image = canvas.toDataURL("image/png");
    console.log(image)
    
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

    bg[0].set({ fill: 'red'});
    bg[1].set({ fill: 'green'});
    bg[2].set({ fill: 'blue'});
    bg[3].set({ fill: 'black'});

    canvas.add(bg[0]);
    canvas.add(bg[1]);
    canvas.add(bg[2]);
    canvas.add(bg[3]);
}

function setSquaresBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 400 000 L 400 200 L 000 200 z'));
    bg.push(new fabric.Path('M 400 000 L 800 000 L 800 200 L 400 200 z'));
    bg.push(new fabric.Path('M 000 200 L 400 200 L 400 400 L 000 400 z'));
    bg.push(new fabric.Path('M 400 200 L 800 200 L 800 400 L 400 400 z'));

    bg[0].set({ fill: 'green'});
    bg[1].set({ fill: 'black'});
    bg[2].set({ fill: 'black'});
    bg[3].set({ fill: 'green'});

    canvas.add(bg[0]);
    canvas.add(bg[1]);
    canvas.add(bg[2]);
    canvas.add(bg[3]);
}

function setFourHorizonsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 000 100 L 800 100 L 800 000 z'));
    bg.push(new fabric.Path('M 000 100 L 000 200 L 800 200 L 800 100 z'));
    bg.push(new fabric.Path('M 000 200 L 000 300 L 800 400 L 800 200 z'));
    bg.push(new fabric.Path('M 000 300 L 000 400 L 800 400 L 800 300 z'));

    bg[0].set({ fill: 'purple'});
    bg[1].set({ fill: 'green'});
    bg[2].set({ fill: 'green'});
    bg[3].set({ fill: 'black'});

    canvas.add(bg[0]);
    canvas.add(bg[1]);
    canvas.add(bg[2]);
    canvas.add(bg[3]);
}

function setFourVerticalsBG(){
    bg = [];
    bg.push(new fabric.Path('M 000 000 L 000 400 L 200 400 L 200 000 z'));
    bg.push(new fabric.Path('M 200 000 L 200 400 L 400 400 L 400 000 z'));
    bg.push(new fabric.Path('M 400 000 L 400 400 L 600 400 L 600 000 z'));
    bg.push(new fabric.Path('M 600 000 L 600 400 L 800 400 L 800 000 z'));

    bg[0].set({ fill: 'purple'});
    bg[1].set({ fill: 'green'});
    bg[2].set({ fill: 'green'});
    bg[3].set({ fill: 'black'});

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