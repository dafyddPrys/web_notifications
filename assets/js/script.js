if(window.Notification && Notification.permission !== 'denied'){
  Notification.requestPermission((status) => {

    console.log('status is ' + status );
    let n = new Notification('Title',{
      body: 'I AM NOTIFICATION!'
    });
  });
} else {
  console.log(Notification.permission);
}


function makeNotification(){
  console.log('making notification');

  var parser = new DOMParser();
  var xmlString = '<p>hola</p>';
  var doc = parser.parseFromString(xmlString, "text/xml");

  console.log('parsed string:');
  console.log(doc);
  var noti = new Notification('Hooray!',
  {
    body: doc
  });
}
