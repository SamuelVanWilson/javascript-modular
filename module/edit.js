import alert from "/module/alert.js"
import { listTask } from "/module/variabel.js"
import deleteTask from "/module/delete.js"

export default function editTask() {
    const editBtn = document.querySelectorAll('.edit')
    editBtn.forEach(task=>{
        task.addEventListener('click', function () {
            let changeTask = prompt('Silahkan Ubah Tugas Anda')
            let newTask = document.createElement('li')
            if (changeTask != null) {
                task.parentElement.remove()
                newTask.innerText = changeTask
                newTask.innerHTML = newTask.innerText + '<button class="hapus">&#10003;</button><button class="edit">&#9998;</button>'
                console.log(newTask);
                listTask.appendChild(newTask)
                alert('Tugas Berhasil Diubah', 'success')
            }else {
                newTask.innerHTML = task.parentElement
            }
        })
    })
}