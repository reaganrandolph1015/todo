import { Folder, foldersArray, currentFolder } from './modules/folder';

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
  folder.setCurrentFolder(folder);
  let folders = document.querySelectorAll('.folder');
  folders[folders.length - 1].classList.add('active');
  folders[folders.length - 1].lastChild.src = src; //TODO: add img src
});
