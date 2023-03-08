const get = async () => {
  const response = await fetch('http://localhost:3300/configs');
  const json = await response.json();
  console.log(json);
};

const post = async () => {
  const data = { "teste" : "teste2" };
  const response = await fetch('http://localhost:3300/configs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
};

const put = async () => {
  const response = await fetch(`http://localhost:3300/configs`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "id": 1,
      "nome": "Testando"
    })
  });
  const json = await response.json();
  console.log(json);
};


setInterval(put, 5000);