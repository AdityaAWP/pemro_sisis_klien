const btnTambah = document.getElementById("tambahMahasiswa");
const btnEdit = document.getElementById("editMahasiswa");
const btnHapus = document.getElementById("deleteMahasiswa");
const modalTambah = document.getElementById("modal-create");
const modalEdit = document.getElementById("modal-edit");

btnTambah.addEventListener("click", function () {
  modalTambah.style.display = "flex";
});
btnEdit.addEventListener("click", function () {
  modalEdit.style.display = "flex";
});
btnHapus.addEventListener("click", function () {
  if (confirm("Apakah Kamu Yakin?")) {
    alert("Data Berhasil Dihapus!");
  }
});

window.addEventListener("click", (e) => {
  if (e.target == modalTambah) {
    modalTambah.style.display = "none";
  }
  if (e.target == modalEdit) {
    modalEdit.style.display = "none";
  }
});
