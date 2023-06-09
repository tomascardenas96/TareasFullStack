import Alumno from "./alumnos.js";

const STUDENTS_URL = "https://647a7fe5d2e5b6101db063f2.mockapi.io/students";
const root = document.getElementById("root");
const loading = document.querySelector(".loading");
const searchStudent = document.querySelector("#search-student");
getStudents(STUDENTS_URL);

//Obtener todos los alumnos en el DOM.
function getStudents(url) {
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      data.forEach((student) => {
          //Creo los elementos (etiquetas) del html.
          const ulTag = document.createElement("ul");
          const spanTag = document.createElement("span");
          const modifyTag = document.createElement("img");
          const deleteTag = document.createElement("img");
          const nameTag = document.createElement("li");
          const addressTag = document.createElement("li");
          const idTag = document.createElement("li");
          const emailTag = document.createElement("li");
          const phoneTag = document.createElement("li");

          //Doy una clase para el estilo y un id para manipular los elementos en js.
          modifyTag.src = `./images/edit.png`;
          deleteTag.src = `./images/delete.png`;
          modifyTag.className = `icons-mod icons verificator-mod`;
          modifyTag.id = `${student.id}`;
          deleteTag.className = `icons-del icons verificator-del`;
          deleteTag.id = `${student.id}`;
          ulTag.className = "students-data";

          //Renderizo en pantalla los datos de cada persona.
          idTag.innerText = `${student.id}`;
          nameTag.innerText = `${student.fullName}`;
          addressTag.innerText = `${student.address}`;
          emailTag.innerText = `${student.email}`;
          phoneTag.innerText = `${student.phone}`;

          //Agrego las etiquetas creadas al DOM.
          root.appendChild(ulTag);
          ulTag.appendChild(idTag);
          ulTag.appendChild(nameTag);
          ulTag.appendChild(addressTag);
          ulTag.appendChild(phoneTag);
          ulTag.appendChild(emailTag);
          ulTag.appendChild(spanTag);
          spanTag.appendChild(modifyTag);
          spanTag.appendChild(deleteTag);
        }
      )
    })
    .catch((err) => console.error(err));
}

//Añadir estudiante nuevo.
function addStudent(url, user) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((result) => result.json())
    .catch((err) => console.error(err));
}

//Eliminar estudiante.
function deleteStudent(url, id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((result) => result.json())
    .then((data) => {})
    .catch((err) => console.error(err));
}

//Modificar estudiante.
function modifyStudent(url, id, user) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((result) => result.json())
    .then((data) => {})
    .catch((err) => console.error(err));
}

//Traigo los datos de los input del modal (Añadir nuevo estudiante);
const fullNameUser = document.querySelector("#fullName-add-student");
const addressUser = document.querySelector("#address-add-student");
const emailUser = document.querySelector("#email-add-student");
const phoneUser = document.querySelector("#phone-add-student");

//Traigo los datos del modal.
const modalAddStudent = document.querySelector("#modal-add-student");
const closeModal = document.querySelector("#close-modal");
const openModal = document.querySelector("#add");
const modalForm = document.querySelector("#form");

//Abrir el modal.
openModal.addEventListener("click", () => {
  modalAddStudent.showModal();
});

//Cerrar el modal.
closeModal.addEventListener("click", () => {
  modalAddStudent.close();
});

//Manejar el formulario para agregar estudiantes.
modalForm.addEventListener("submit", handleSubmit);
modalForm.addEventListener("reset", () => {});

function handleSubmit() {
  let userName = fullNameUser.value;
  let userAddress = addressUser.value;
  let userEmail = emailUser.value;
  let userPhone = phoneUser.value;
  const userSubmit = new Alumno(userName, userAddress, userEmail, userPhone);
  addStudent(STUDENTS_URL, userSubmit);
  loading.style.display = "inline";
  setTimeout(() => {
    location.reload();
  }, 400);
}
//Metodos para modificar alumno.
const modalModStudent = document.querySelector("#modal-mod-student");
const closeModModal = document.querySelector("#close-mod-modal");
const modForm = document.querySelector("#mod-form");

closeModModal.addEventListener("click", () => {
  modalModStudent.close();
});

document.addEventListener("click", (e) => {
  let iconId = e.target.id;
  //Cuando hago click en los iconos de borrar alumno.
  if (e.target.className === `icons-del icons verificator-del`) {
    deleteStudent(STUDENTS_URL, iconId);
    loading.style.display = "inline";
    setTimeout(() => {
      location.reload();
    }, 400);
    //Cuando hago click en los iconos de modificar alumno.
  } else if (e.target.className === `icons-mod icons verificator-mod`) {
    modalModStudent.showModal();
    //Datos del input para modificar usuarios.
    const fullNamemodUser = document.querySelector("#fullName-mod-student");
    const addressmodUser = document.querySelector("#address-mod-student");
    const emailmodUser = document.querySelector("#email-mod-student");
    const phonemodUser = document.querySelector("#phone-mod-student");
    modForm.addEventListener("submit", () => {
      const fullNamemodUser2 = fullNamemodUser.value;
      const addressmodUser2 = addressmodUser.value;
      const emailmodUser2 = emailmodUser.value;
      const phonemodUser2 = phonemodUser.value;
      const newDataStudent = new Alumno(
        fullNamemodUser2,
        addressmodUser2,
        emailmodUser2,
        phonemodUser2
      );
      modifyStudent(STUDENTS_URL, iconId, newDataStudent);
      loading.style.display = "inline";
      setTimeout(() => {
        location.reload();
      }, 400);
    });
  }
});

//Buscar por nombre.
