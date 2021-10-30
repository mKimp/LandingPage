/* Count down timer function */
const dateOfEvent = new Date("November 6, 2021 01:09:00").getTime();
const timer = () => {
  const now = new Date().getTime();

  let diff = dateOfEvent - now;

  if (diff <= 0) {
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  days <= 9 ? (days = `0${days}`) : days;
  hours <= 9 ? (hours = `0${hours}`) : hours;
  minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
  seconds <= 9 ? (seconds = `0${seconds}`) : seconds;

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

setInterval(timer, 1000);

/* Modals pop up based on clicked image or a link  */
document.addEventListener("click", (e) => {
  let targetId = e.target.id;
  if (targetId === "SamInfo") {
    targetId = "Sam";
    document.getElementById(targetId).click();
  } else if (targetId === "thomasInfo") {
    targetId = "thomas";
    document.getElementById(targetId).click();
  } else if (targetId === "gabiInfo") {
    targetId = "gabi";
    document.getElementById(targetId).click();
  }
  popUpModal(targetId);
});

const popUpModal = (id) => {
  let speaker = document.getElementById(id);
  speaker.addEventListener("click", (e) => {
    $("#Mymodal").modal("show");
    let title = e.target.getAttribute("alt");
    $("#ModalLabel").text(title);
    $("#ModalBody").text(`Some more cool information about ${title}`);
  });
  let closeModal = document.getElementById("closeModalButton");
  closeModal.addEventListener("click", (e) => {
    $("#Mymodal").modal("hide");
  });
};
