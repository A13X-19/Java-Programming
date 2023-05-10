const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const notes = JSON.parse(localStorage.getItem("notes") || "[]")
addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

function showNotes() {
    notes.forEach((note) => {
        console.log(note);
    });
}

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleTag.value,
    noteDesc = descTag.value;
    console.log(noteTitle, noteDesc);

    if(noteTitle || noteDesc) {
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

        let noteInfo = {
            title: noteTitle, description: noteDesc,
            date: '${month} ${day}, ${year}'
        }
        notes.push(noteInfo);
        localStorage,setItems("notes", JSON.stringify(notes));
        closeIcon.click();
    }
});