//https://teachablemachine.withgoogle.com/models/14spYY1bc/
function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/14spYY1bc/model.json",model_ready)

}
 function model_ready() {
classifier.classify(got_results)
 }
 function got_results(error,results) {
    console.log('got_results')
    if (error) {
        console.log(error)

    }
    else {
        console.log(results)
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML='I can hear - '+results[0].label
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")"
        img1=document.getElementById("Alien_1")
        
        if (results[0].label=="barking") {
            img1.src="dog.gif"
            
        }
        else if (results[0].label=="mooing") {
            img1.src="cow.gif"
            
        }
        else if (results[0].label=="meowing") {
            img1.src="cat.gif"
           
        }
        else if (results[0].label=="roaring") {
            img1.src="lion-roar.gif"
           
        }
        else {
            img1.src="ear.jpg"
         
        }
    }
 }