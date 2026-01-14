fetch('licznik.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Błąd HTTP');
    }
    return response.text();
  })
  .then(text => {
    console.log(text);
    const licznik = document.getElementById("licznik")
    licznik.text = "Jest już nas: " + text

  })
  .catch(err => console.error(err));



