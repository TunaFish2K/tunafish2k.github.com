function get_time_string() {
    const now = new Date();

    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);

    return hours + ":" + minutes + ":" + seconds;
}

function tick(time_element) {
    time_element.innerText = get_time_string();
}

window.onload = function () {
    time_element = document.getElementById("time");
    setInterval(tick, 100, time_element);
}