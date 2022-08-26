

const client  = mqtt.connect('ws://test.mosquitto.org:8080/mqtt')

const Solicitud = (value) => {
  client.subscribe('Solicitud', function (err) {
    if (!err) {
       
      client.publish('Solicitud', value)
    }
  })
}




client.on('message', function (topic, message) {
  // message is Buffer
  if(message == 'EstadoNormal'){
    CantTime(30);
  }
  else if ('EstadoEspecial'){
CantTime(45);
  }
  client.end()
})


function CantTime(value) {

  console.log('Funcion ejecutada');
  Time(value);
  
  }

