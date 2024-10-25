export default function alert(message, type) {
    const bodyTag = document.querySelector('body')
    let alert = document.createElement('div')
    alert.innerText = message
    alert.classList.add('notif', type)
    bodyTag.appendChild(alert)
    setTimeout(() => {
        bodyTag.removeChild(alert)
    }, 2000);
}