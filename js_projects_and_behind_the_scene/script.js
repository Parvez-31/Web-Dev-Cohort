const dataEl = document.getElementById('data');

fetch('https://randomuser.me/api/?results=50')
  .then(response =>
    response
      .json()
      .then(userData => {
        const data = userData.results;
        // console.log(data);
        data.forEach(user => {
          const imgEl = document.createElement('img');
          imgEl.src = user.picture.thumbnail;
          dataEl.appendChild(imgEl);
        });
      })
      .catch(err => console.log('Error fetching API:', err))
  )
  .catch(error => new Error('Cannot fetch api'));
