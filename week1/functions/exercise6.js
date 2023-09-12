fetch("https://jsonplaceholder.typicode.com/todos")
   .then(response => response.json())
   .then(json => {
      const completedTodosPerUser = json.reduce((i, todo) => {
         if (todo.completed) {
            i[todo.userId] = (i[todo.userId] || 0)+ 1 
         }
      return i;
   }, {});
   const resultArray = Object.keys(completedTodosPerUser);
   console.log(resultArray);
   })
   .catch(function(err) {
   console.log(err);
   });

//source: https://www.simeongriggs.dev/replacing-chained-map-and-filter-with-reduce