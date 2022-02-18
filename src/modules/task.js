import { createElement, setId } from './dom';
import { currentFolder } from './folder';

const $folder = document.querySelector('#task-container');

export class Task {
  constructor(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.id = setId();
  }

  render() {
    // Create HTML elements with function from dom moudle, assign them to a constant, and assign properties to elements
    const $div = createElement('div', this.id, ['task'], null);
    const $divTaskName = createElement('div', null, ['task-name'], null);
    const $checkbox = createElement('input', null, ['checkbox'], null);
    $checkbox.type = 'checkbox';

    const $p = createElement('p', null, null, this.name);
    const $divTaskInfo = createElement('div', null, ['task-info'], null);
    const $date = createElement('p', null, null, this.date);
    const $badge = createElement('div', null, ['badge'], this.priority);

    const $delete = createElement('img', null, ['edit'], null);
    $delete.src = null; //TODO: add img src
    const $edit = createElement('img', null, ['edit'], null);
    $edit.src = null; //TODO: add img src
    $edit.addEventListener('click', () => {
      this.edit();
    });

    // Append created elements to each other
    $divTaskName.appendChild($checkbox);
    $divTaskName.appendChild($p);

    $divTaskInfo.appendChild($date);
    $divTaskInfo.appendChild($badge);
    $divTaskInfo.appendChild($delete);
    $divTaskInfo.appendChild($edit);

    $div.appendChild($divTaskName);
    $div.appendChild($divTaskInfo);

    $folder.appendChild($div);
    $checkbox.addEventListener('change', () => {
      $p.classList.toggle('done');
    });
    if (this.priority === 'important') {
      $badge.classList.add('important');
    }

    $delete.addEventListener('click', () => {
      this.delete();
    });
  }

  delete() {
    currentFolder.tasks = currentFolder.tasks.filter(
      (task) => task.id !== this.id
    );
    currentFolder.renderTasks();
  }

  edit() {
    const $modal = document.getElementById('myModal');
    $modal.style.display = 'flex';
    const $form = document.getElementById('form-task-edit');
    $form.addEventListener('submit', (e) => {
      e.preventDefault();
      const $tilte = document.getElementById('task-name-edit');
      if ($title.value === '') {
        alert('Task must have a name.');
        return;
      }
      const $date = document.getElementById('task-date-edit');
      if ($date.value === '') {
        alert('Please choose a deadline.');
        return;
      }
      const $priority = document.getElementById('task-priority-edit');

      // Assign user input to constructor
      this.name = $title.value;
      this.date = $date.value;
      this.priority = $priority.value;
      $modal.style.display = 'none';
      currentFolder.renderTasks();
    });
  }
}
