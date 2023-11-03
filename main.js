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
 }