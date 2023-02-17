// ====HUMAN BODY====
let userCondition = [
    {
        part: "head",
        summary:"no problem! your head is healthy!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea." 
    }, 
    {
        part: "left-shoulder", 
        summary: "no problem! Your left shoulder is strong!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    }, 
    {
        part: "right-shoulder", 
        summary: "your right shoulder has no problem!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "chest", 
        summary: "coronary artery disease is caused by plaque buildup in the wall of the arteries that supply blood to the heart (called coronary arteries)",description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "stomach", 
        summary: "your stomach is good and healthy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "right-arm", 
        summary: "your right arm is stronf and healthy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "left-arm", 
        summary: "your left arm is getting better from your last injury!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "righ-hand", 
        summary: "your right hand is in good shape",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "left-hand", 
        summary: "your left hand is is strong and healthy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "right-leg", 
        summary: "your right leg is in good condition and strong!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "left-leg", 
        summary: "open fracture: the skin was pierced by the bone or by the blow that brekas the skin at the tiime of the fracture",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "left-foot", 
        summary: "your left foot is strong and in good condtion",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    },
    {
        part: "right-foot", 
        summary: "no problem! strong foot!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam qui fuga, accusamus ipsum provident reprehenderit iure sequi necessitatibus! Hic voluptatibus quis aliquam quidem molestias nobis molestiae esse impedit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis vitae nulla vero! Repudiandae inventore impedit culpa itaque illum. Labore modi eaque, accusamus dicta doloremque obcaecati minima laboriosam perferendis ea."
    }
]

    localStorage.setItem('body', JSON.stringify(userCondition))
    let bodyPart = JSON.parse(localStorage.getItem('body'))

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
                    document.getElementById('summary').innerHTML = bodyPart[i].summary
                }
            }
            document.getElementById('btn').innerHTML = `<button id="btn1">More Info</button>`
            document.getElementById('btn1').addEventListener('click', function(){
                location.href = "./moreInfo.html"
            })

        }
        
        // _piece.onmouseover = function(t){
        //     if (t.target.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
        //     if (t.target.parentElement.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.parentElement.getAttribute('data-position');
        // }

    }
}

// document.getElementById('hbody').addEventListener('click'){

// }