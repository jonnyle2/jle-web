import fetch from 'node-fetch';

const PATH = 'http://localhost:4000/api/contact';

// POST new contact
function postContact(contact){
  fetch(PATH, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(contact)
  })
  .then(response => response.json())
  .then(data => console.log('Success', data))
  .catch(error => console.error('Error', error));
}

export default postContact;