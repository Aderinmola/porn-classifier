import 'babel-polyfill'
import * as nsfwjs from 'nsfwjs'

const checkandreplaceImageSrc = (resultArray, index) => {
    console.log(resultArray)
    resultArray.forEach(item => {
        if((item.className == "Porn" || item.className == "Hentai" || item.className == "Sexy") && item.probability > 0.5){
            images[index].src = './images/not-allowed.png'
        }
    })
}

const images = document.querySelectorAll('img')
nsfwjs.load('https://s3.amazonaws.com/ir_public/nsfwjscdn/TFJS_nsfw_mobilenet/tfjs_quant_nsfw_mobilenet/model.json ').then(model => {
    const predictions = []
    images.forEach(image => {
        predictions.push(model.classify(image))
    })
    return predictions
})
.then(predictions => {
    predictions.forEach((prediction, index) => {
        prediction.then(r => {checkandreplaceImageSrc(r, index)})
    })
})






