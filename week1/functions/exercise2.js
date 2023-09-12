fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.map(todo => todo.title) // Complete this code
      console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });