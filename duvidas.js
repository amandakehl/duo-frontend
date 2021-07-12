fetch("http://127.0.0.1:5500/duvidas.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.lista_tarefas.forEach(function (duvidaObj) {
      var duvida = document.createElement('div');
      duvida.classList.add('duvidaContainer');

      var labelDuvida = document.createElement('label');
      labelDuvida.innerHTML = duvidaObj.titulo;
      labelDuvida.classList.add('pergunta');
      labelDuvida.setAttribute('onClick', 'mostra(' + duvidaObj.id + ')');

      duvida.appendChild(labelDuvida);

      var respostaDuvida = document.createElement('p');
      respostaDuvida.innerHTML = duvidaObj.descricao;
      respostaDuvida.classList.add('resposta');

      var divDuvida = document.createElement('div');
      divDuvida.classList.add('hidden');
      divDuvida.id = duvidaObj.id;
      divDuvida.appendChild(respostaDuvida);

      duvida.appendChild(divDuvida);

      document.getElementById('duvidas').appendChild(duvida);
    })
  })

  .catch(function (err) {
    console.log(err);
  });

function mostra(id) {
  if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none';
    document.getElementById(id).parentElement.classList.remove('ativo');
  } else {
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).parentElement.classList.add('ativo');
  }
}


