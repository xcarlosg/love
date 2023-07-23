          // JavaScript para ocultar/mostrar el carrusel al hacer clic en el botón
          const toggleCarouselButton = document.getElementById('toggleCarouselButton');
          const myCarousel = document.getElementById('myCarousel');
      
          toggleCarouselButton.addEventListener('click', function () {
            myCarousel.classList.toggle('d-none');
          });


          const startTicTacToeButton = document.getElementById('startTicTacToeButton');
          const board = document.querySelector('.board');
      
          startTicTacToeButton.addEventListener('click', function () {
            board.classList.toggle('d-none');
            initializeGame();
          });


          