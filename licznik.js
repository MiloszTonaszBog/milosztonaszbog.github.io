fetch('/data/values.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Błąd HTTP');
    }
    return response.text();
  })
  .then(text => {
    console.log(text);
    // tu możesz przetwarzać zawartość pliku
  })
  .catch(err => console.error(err));