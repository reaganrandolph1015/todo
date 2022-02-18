import { createElement, setId } from './dom';

const $folder = document.querySelector('#folders .card');

class Folder {
  constructor(title) {
    this.title = title;
    this.id = setId();
    this.tasks = [];
  }

  render() {
    const $div = createElement('div', this.id, ['folder'], null);
    const $title = createElement('dp', null, null, this.title);
    const $delete = createElement('img', null, ['delete'], null);
    $delete.src = './img/stock.jpg'; //TODO: add img src
    $delete.addEventListener('click', () => {
      this.delete();
    });

    $div.appendChild($title);
    $div.appendChild($delete);

    $folder.appendChild($div);
    $div.addEventListener('click', () => {
      currentFolder = this;
      currentFolder.active = falsethis.renderTasks();
      let foldersClass = document.querySelectorAll('.folder');
      foldersClass.forEach((f) => (f.classList.value = 'folder'));
      let delBtns = document.querySelectorAll('.delete');
      deleteBtns.forEach((button) => (button.src = './img/stock.jpg')); //TODO: add img src
      if (!$div.classList.value.includes('active')) {
        $div.classList.add('active');
        $delete.src = './img/stock.jpg'; //TODO: add img src
      } else return;
    });
  }

  delete() {
    foldersArray = foldersArray.filter((folder) => folder.id !== this.id);
    folder.renderFolders();
  }

  renderTasks() {
    const $tasks = document.querySelector('#task-container');
    $tasks.innerHTML = ``;
    this.tasks.forEach((task) => task.render());
  }

  static renderFolders() {
    $folder.innerHTML = '';
    foldersArray.forEach((folder) => folder.render());
  }

  static setCurrentFolder(folder) {
    currentFolder = folder;
  }
}

let foldersArray = [new Folder('Test Folder')];
let currentFolder = foldersArray[0];

export { Folder, foldersArray, currentFolder };
