

  
  function Print(a,b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(a);
        resolve();
      }, b);
    });
  }
  
  async function printSequence() {
    await Print('a', 1000);
    await Print('b', 2000);
    await Print('c', 3000);
    await Print('d', 4000);
    await Print('e', 5000);
  }
  
  printSequence();