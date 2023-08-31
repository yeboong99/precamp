let isStarted = false;

let auth = () => {

    if (isStarted === false) {
        //타이머가 작동 중이 아닐 때
        isStarted = true
        document.getElementById("finish").disabled = false

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token

        let time = 10
        setInterval(function () {
            if (time >= 0) {
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + " : " + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false
                console.log("타이머 작동중")
            }
        }, 1000)
    } else {
        //타이머가 작동 중일 때
    }

}