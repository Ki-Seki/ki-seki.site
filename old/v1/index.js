// 运行天数
var days = getRunningDays();
document.getElementById("number").innerHTML = days;
document.getElementById("suffix").innerHTML = getSuffix(days);

// 运行天数显示样式
var len = String(days).length;
if (len > 2)
{
    var bias = (len - 2) * 15;  // 计算偏置量，平衡视觉效果
    document.getElementById("number").style.width = 185 + bias + "px";
    document.getElementById("suffix").style.width = 165 - bias + "px";
}

function getRunningDays() {
    var start = new Date(2021, 2 - 1, 3).getTime();
    var end = Date.now();
    return runningDays = Math.ceil((end - start) / (24 * 3600 * 1000));
}

function getSuffix(days) {
    if (11 <= days % 100 && days % 100 < 20) return "th.";
    var suffixs = {0: "th.", 1: "st.", 2: "nd.", 3: "rd."};
    if (days % 10 < 4) return suffixs[runningDays % 10];
    else return suffixs[0];
}