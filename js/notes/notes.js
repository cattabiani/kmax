////////////// listeners

export function modal2editNodeForm(note) {

    const title = document.getElementById('modalTitle');
    const info = document.getElementById('modalInfo');

    title.value = (note != null)  ? note.title : '';
    info.value = (note != null)  ? note.info : '';

    modal.style.display = 'block';
    title.focus();

}

