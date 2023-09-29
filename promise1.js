function createPost(post) {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        posts.push({title: 'POST0'});
        
        resolve(post);
      }, 1000);
    });
  }
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
      
        const updatedLastActivityTime = new Date().toLocaleString();
        resolve(updatedLastActivityTime);
      }, 1000);
    });
  }
  const posts = [
    { title: 'Post 1'},
    { title: 'Post 2'},
    { title: 'Post 3' },
    {title: 'Post 4'}
  ];
  
  const postPromises = posts.map(post => createPost(post));
  Promise.all([...postPromises, updateLastUserActivityTime()])
  .then(results => {
    
    const lastActivityTime = results.pop();

    
    console.log('Posts:', results);
    console.log('Last Activity Time:', lastActivityTime);
  })
  .catch(error => {
   
    console.error('An error occurred:', error);
  });
