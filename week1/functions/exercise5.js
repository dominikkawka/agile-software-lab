fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((i, todo) => {
      if(!todo.completed) {
         i.push({userId: todo.userId, title: todo.title})
      }
      return i
    }, []);
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });

//source: https://www.simeongriggs.dev/replacing-chained-map-and-filter-with-reduce