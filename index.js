// ====HUMAN BODY====
let bodyPart = [
    {part: "head",summary:"no problem! your head is healthy!"}, 
    {part: "left-shoulder", summary: "no problem! Your left shoulder is strong!"}, 
    {part: "right-shoulder", summary: "your right shoulder has no problem!"},
    {part: "chest", summary: "coronary artery disease is caused by plaque buildup in the wall of the arteries that supply blood to the heart (called coronary arteries) "},
    {part: "stomach", summary: "your stomach is good and healthy"},
    {part: "right-arm", summary: "your right arm is stronf and healthy"},
    {part: "left-arm", summary: "your left arm is getting better from your last injury!"},
    {part: "righ-hand", summary: "your right hand is in good shape"},
    {part: "left-hand", summary: "your left hand is is strong and healthy"},
    {part: "right-leg", summary: "your right leg is in good condition and strong!"},
    {part: "left-leg", summary: "open fracture: the skin was pierced by the bone or by the blow that brekas the skin at the tiime of the fracture"},
    {part: "left-foot", summary: "your left foot is strong and in good condtion"},
    {part: "right-foot", summary: "no problem! strong foot!"}]

window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    for (var i = 0; pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {

            if (t.target.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
            let part = t.target.parentElement.getAttribute('data-position');
            if (t.target.parentElement.getAttribute('data-position') != null) document.getElementById('data').innerHTML = part
            let condition = "Healthy"
            if(part == "chest"){
                condition = "Severe"
            }
            if(part == "left-leg"){
                condition = "Healing"
            }
            document.getElementById('condition').innerHTML = condition

            for(let i = 0; i < bodyPart.length; i++){
                if(bodyPart[i].part == part){
                    // document.getElementById('summary').innerHTML = bodyPart[i].summary
                }
            }

        }
        
        // _piece.onmouseover = function(t){
        //     if (t.target.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
        //     if (t.target.parentElement.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.parentElement.getAttribute('data-position');
        // }

    }
}

// document.getElementById('hbody').addEventListener('click'){

// }