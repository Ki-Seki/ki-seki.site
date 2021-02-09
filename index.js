// 运行天数
var days = getRunningDays();
document.getElementById("number").innerHTML = days;
document.getElementById("suffix").innerHTML = getSuffix(days);

// 运行天数显示样式
var numberWidth = String(days).length * 25;
var counterWidth = 400;  // <body> 默认宽度
var suffixWidth = (counterWidth - numberWidth) / 2;
document.getElementById("number").style.width = numberWidth + "px";
document.getElementById("preffix").style.width = suffixWidth + "px";
document.getElementById("suffix").style.width = suffixWidth + "px";  // 平衡视觉效果

function getRunningDays() {
    var start = new Date(2021, 2 - 1, 3).getTime();
    var end = Date.now();
    return runningDays = Math.ceil((end - start) / (24 * 3600 * 1000));
}

function getSuffix(days) {
    var suffixs = {1: "st.", 2: "nd.", 3: "rd.", 4: "th."};
    if (days % 10 < 4) return suffixs[runningDays % 10];
    else return suffixs[4];
}