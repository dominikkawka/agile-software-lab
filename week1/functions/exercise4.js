fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.reduce((i, todo) => {
      return todo.completed ? i+1 : i;
    }, 0);
    console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });