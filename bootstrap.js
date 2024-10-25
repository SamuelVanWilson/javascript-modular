import * as variabel from '/module/variabel.js'
import addTask from '/module/add.js'
import deleteTask from '/module/delete.js'
import editTask from '/module/edit.js'

const mutation= new MutationObserver(mutationList =>{
    mutationList.forEach(allTask=>{
        if (allTask.addedNodes.length > 0) {
            deleteTask()
            editTask()
        }
    })
})
mutation.observe(variabel.listTask, {
    childList: true,
    subtree: false 
})
variabel.button.addEventListener('click', ()=> addTask())