function CompTask (id,e,card_title){
        e.preventDefault();
        const conTaskAssNum = parseInt(document.getElementById("task-ass-num").innerText);

        const conComTaskNum = parseInt(document.getElementById("comp-task-num").innerText);

        const taskTitle = document.getElementById(card_title).innerText;
        const currTaskAssNum = conTaskAssNum - 1;

        document.getElementById("task-ass-num").innerText = currTaskAssNum;
        const currComTaskNum = conComTaskNum + 1;

        document.getElementById("comp-task-num").innerText = currComTaskNum;
        
        const disBtn = document.getElementById(id);

        const container = document.getElementById("task-complete-container");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="p-3">
            <p class="bg-[#F4f7FF] p-3 rounded-lg">
              You have completed the task ${taskTitle} at ${getCurrentTime()}.
            </p>
          </div>
        `
        container.appendChild(div);


        disBtn.style.backgroundColor = "gray";
        alert("Board Updated Successfully");
        if (currTaskAssNum === 0) {
            alert("Congrats!!! You have completed all the current task")
        }

        disBtn.classList.remove("cursor-pointer")

        disBtn.disabled = true;
}


function getCurrentTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm;

    if (hours >= 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds + " " + ampm;
}