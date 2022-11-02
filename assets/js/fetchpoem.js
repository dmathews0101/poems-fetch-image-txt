      console.log('Fetching the poem and displaying on index.html page');
      catchPoemByStc()
        .then(poem => {
          document.getElementById('poembystc').innerText = poem;
          console.log('Successfull');
        })
        .catch(error => {
          console.log('Error');
          console.error(error);
        });

      async function catchPoemByStc() {
        const response = await fetch('../../text/poem1.txt');
        return await response.text();
      }