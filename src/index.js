import { Folder, foldersArray, currentFolder } from './modules/folder';
import { Task } from './modules/task';

const $folderForm = document.getElementById('form-folder');

$folderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const $title = document.getElementById('folder-name');
  if ($title.value === '') {
    alert('Project folder must have a name');

    return;
  }
  const folder = new Folder($title.value);
  foldersArray.push(folder);
  $title.value = '';
  Folder.renderFolders();
  Folder.setCurrentFolder(folder);
  let folders = document.querySelectorAll('.folder');
  folders[folders.length - 1].classList.add('active');
  folders[folders.length - 1].lastChild.src = './img/stock.jpg'; //TODO: add img src
});

const $taskForm = document.getElementById('form-task');

$taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const $title = document.getElementById('task-name');
  if ($title.value === '') {
    alert('Task must have a name');
    return;
  }
  const $date = document.getElementById('task-date');
  if ($date.value === '') {
    alert('Please choose a deadline.');
    return;
  }
  const $priority = document.getElementById('task-priority');

  const task = new Task($title.value, $date.value, $priority.value);
  currentFolder.tasks.push(task);
  task.render();
});

Folder.renderFolders();
const user = prompt(`What's your first name?`);
document.querySelector('.user-name').innerText = user || 'User';
