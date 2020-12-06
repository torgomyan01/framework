console.time()


let sections = $('.sec');
let bodyOptions = $('.body_sec');
let op_t = $('.op_t');
let sectionsArray = [];
console.log(bodyOptions)

sections.map((e) => {
    sectionsArray.push(false);
    sections[e].onclick = function () {
        //for showing to sections
        showingSection(e);
        //for coose title to section
        CooseTitle(e);
    }
})

// function to choose value
function CooseTitle(e) {
    let childBodySec = bodyOptions[e].children;
    for (let i = 0; i < childBodySec.length; i++) {
        childBodySec[i].onclick = function () {
            console.log(this);
            let this_text = this.innerText;
            op_t[e].innerText = this_text;
            op_t[e].setAttribute('data-title', this_text);
        }
    }
}


function showingSection(e) {
    let showindBlock = bodyOptions[e];
    if (sectionsArray[e] === false) {
        showindBlock.classList.add("show");
        sectionsArray[e] = true;
    } else {
        showindBlock.classList.remove("show");
        sectionsArray[e] = false;
    }
}






$('head').append(`
<style>

.sec{
    width: 180px;
    height: 35px;
    background: #5bc0de;
    -webkit-transition: height 0.5s;
    -o-transition: height 0.5s;
    transition: height 0.5s;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    -webkit-box-shadow: 0px 0px 5px #cacaca;
            box-shadow: 0px 0px 5px #cacaca;
}
.sec::after{
    content: "";
    position: absolute;
    width: 8px;
    height: 1px;
    background: #fff;
    border-radius: 5px;
    right: 10px;
    top: 17px;
    color: #fff;
    -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
            transform: rotate(45deg);
}
.sec::before{
    content: "";
    position: absolute;
    width: 8px;
    height: 1px;
    background: #fff;
    border-radius: 5px;
    right: 5px;
    top: 17px;
    color: #000;
    -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
}
.sec .op_t:hover{
    background: #51aeca;
}
.sec .body_sec{
    background: #5bc0de;
    width: 100%;
    height: 0px;
    -webkit-box-shadow: 0px 0px 1px rgb(204, 204, 204);
            box-shadow: 0px 0px 1px rgb(204, 204, 204);
    border-radius: 5px;
    -webkit-transition: height 0.5s;
    -o-transition: height 0.5s;
    transition: height 0.5s;
    overflow: auto;
}
.sec .body_sec .op{
    display: block;
    text-align: center;
    color: #fff;
    padding: 8px 0;
    border-bottom: 1px solid rgba(236, 236, 236, 0.171);
}
.sec .op_t{
    display: block;
    text-align: center;
    color: #fff;
    padding: 8px 0;
    border-bottom: 1px solid rgba(236, 236, 236, 0.445);
    -webkit-transition: background 0.3s;
    -o-transition: background 0.3s;
    transition: background 0.3s;
    background: transparent;
    border-radius: 5px;
}
.sec .body_sec .op:hover{
    background: rgba(255, 255, 255, 0.158);
}

.show{
    height: 200px !important;
}
</style>
`)








console.timeEnd()