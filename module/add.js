import {input, listTask} from '/module/variabel.js';
import alert from '/module/alert.js'

export default function addTask(){
    if (input.value.trim() == '') {
        alert('Harap Di Isi, Sebelum Tugas Ditambahkan', 'danger')
    }else {
        let task = document.createElement('li')
        task.innerText = input.value.trim()
        task.innerHTML = task.innerText + '<button class="hapus">&#10003;</button><button class="edit">&#9998;</button>'
        listTask.appendChild(task)
        alert('Tugas Berhasil Ditambahkan', 'success')
    }
}