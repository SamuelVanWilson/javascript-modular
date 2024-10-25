import alert from "/module/alert.js"
export default function deleteTask() {
    const deleteBtn = document.querySelectorAll('.hapus')
    
    deleteBtn.forEach(task=>{ 
        task.addEventListener('click', function () {
            task.parentElement.remove()
            alert('Tugas Berhasil Dihapus', 'done')
        })
    })
}