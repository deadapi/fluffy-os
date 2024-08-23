const dragElement = (element: any) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = element.querySelector('.window-header');

    if (header) {
        header.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e: any) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e: any) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft - pos1}px`;
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

const init = () => {
    const windowElement = document.getElementById("window-1");
    if (windowElement) {
        dragElement(windowElement);
    }

    const closeButton = document.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            const windowElement = document.getElementById('window-1');
            if (windowElement) {
                windowElement.style.display = 'none';
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', init);
