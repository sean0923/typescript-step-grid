import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(({ data }) => {
  const todo = data as Todo;

  const id = todo.Id;
  const title = todo.titles;
  const finished = todo.finished;

  console.log(`
    Id: ${id}
    Title: ${title}
    Done: ${finished}
  `);
});
