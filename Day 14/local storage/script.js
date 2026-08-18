const STORAGE_KEY = "myNotesApp_notes";

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const errorMsg = document.getElementById("errorMsg");
const emptyState = document.getElementById("emptyState");

let notes = [];

// Local Storage se notes uthana
function getNotesFromStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// notes array ko Local Storage mein save karna
function saveNotesToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// Page load hote hi notes dikhana
function loadNotes() {
  notes = getNotesFromStorage();
  renderNotes();
}

// Naya note add karna
function addNote() {
  const text = noteInput.value.trim();
  if (text === "") {
    showError("Note cannot be empty!");
    return;
  }
  const newNote = {
    id: Date.now().toString(),
    text: text,
    createdAt: new Date().toLocaleString(),
  };
  notes.unshift(newNote);
  saveNotesToStorage();
  renderNotes();
  noteInput.value = "";
  clearError();
}

// Note delete karna
function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  saveNotesToStorage();
  renderNotes();
}

// Edit mode on karna
function editNote(id) {
  renderNotes(id);
}

// Edited note save karna
function saveEditedNote(id, newText) {
  const trimmed = newText.trim();
  if (trimmed === "") {
    alert("Note cannot be empty!");
    return;
  }
  notes = notes.map((note) =>
    note.id === id ? { ...note, text: trimmed } : note
  );
  saveNotesToStorage();
  renderNotes();
}

// Notes ko screen pe render karna
function renderNotes(editingId = null) {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  notes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";

    const dateEl = document.createElement("div");
    dateEl.className = "note-date";
    dateEl.textContent = note.createdAt;
    card.appendChild(dateEl);

    const textWrapper = document.createElement("div");
    textWrapper.className = "note-text";

    if (editingId === note.id) {
      const textarea = document.createElement("textarea");
      textarea.value = note.text;
      textWrapper.appendChild(textarea);
      card.appendChild(textWrapper);

      const actions = document.createElement("div");
      actions.className = "note-actions";

      const saveBtn = document.createElement("button");
      saveBtn.className = "save-btn";
      saveBtn.textContent = "Save";
      saveBtn.onclick = () => saveEditedNote(note.id, textarea.value);

      const cancelBtn = document.createElement("button");
      cancelBtn.className = "delete-btn";
      cancelBtn.textContent = "Cancel";
      cancelBtn.onclick = () => renderNotes();

      actions.appendChild(saveBtn);
      actions.appendChild(cancelBtn);
      card.appendChild(actions);
    } else {
      textWrapper.textContent = note.text;
      card.appendChild(textWrapper);

      const actions = document.createElement("div");
      actions.className = "note-actions";

      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.textContent = "Edit";
      editBtn.onclick = () => editNote(note.id);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteNote(note.id);

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      card.appendChild(actions);
    }

    notesContainer.appendChild(card);
  });
}

function showError(msg) {
  errorMsg.textContent = msg;
  noteInput.style.borderColor = "#e74c3c";
}

function clearError() {
  errorMsg.textContent = "";
  noteInput.style.borderColor = "#e0e0e0";
}

addNoteBtn.addEventListener("click", addNote);
noteInput.addEventListener("input", clearError);
noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    addNote();
  }
});

document.addEventListener("DOMContentLoaded", loadNotes);