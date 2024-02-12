function changeVideo(videoId) {
    var iframe = document.querySelector('.video-container iframe');
    iframe.src = "https://www.youtube.com/embed/" + videoId;
  }
    
    // Funzione per caricare i dati JSON e generare le anteprime dei video
    function loadVideoThumbnails() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              var videoData = JSON.parse(xhr.responseText);
              var videoList = document.getElementById("video-list");
              videoData.forEach(function(video) {
                var img = document.createElement("img");
                img.src = video.thumbnail;
                img.alt = "Thumbnail";
                img.addEventListener("click", function() {
                  changeVideo(video.id);
                });
                videoList.appendChild(img);
              });
            } else {
              console.error("Errore durante il caricamento dei dati JSON");
            }
          }
        };
        xhr.open("GET", "video-id.json", true);
        xhr.send();
      }
  
      // Funzione per cambiare il video nell'iframe
      function changeVideo(videoId) {
        var iframe = document.querySelector('.video-container iframe');
        iframe.src = "https://www.youtube.com/embed/" + videoId;
      }
  
      // Carica i dati dei video al caricamento della pagina
      document.addEventListener("DOMContentLoaded", function(event) {
        loadVideoThumbnails();
      });
  