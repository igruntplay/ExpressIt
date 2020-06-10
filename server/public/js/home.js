// ids..
const postForm = document.getElementById('postForm');
const publishBTN = document.getElementById('publishBTN');

// navbar..
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems);
  });

// Modal upload btn..
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
   M.AutoInit();
  });


  function publishForm(mediaFile, postTXT, section){

      let formData = {
        newFile: mediaFile,
        newTXT: postTXT,
        newSection: section
      }
    // http request..
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.addEventListener("load", function () {
      if (this.status == 200) {
        // Respuesta de la request BACKEND ACA
      }
    });



    xmlhttp.open("POST", "url", true);
    xmlhttp.send(JSON.stringify(formData));
  }

  publishBTN.addEventListener('click', function(){

    const mediaFile = document.getElementById('mediaFile').value;
    const postTXT = document.getElementById('postTXT').value;
    const section = document.getElementById('section').value;
    publishForm(mediaFile, postTXT, section);
  });

  