function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}
function setup(){
    canvas= createCanvas(500, 500)
    canvas.mouseReleased(classifyCanvas)
    background("white")
}

function draw(){
    strokeWeight(5);
    stroke("black");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    console.log(results)
    document.getElementById("label").innerHTML= "Label: " + results[0].label
    document.getElementById("confidence").innerHTML= "Confidence: " + results[0].confidence
}
function clearCanvas(){
    background("white")
}