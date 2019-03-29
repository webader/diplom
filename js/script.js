

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
   
   
   
   
   
    //modal();
 
 
    function modal() {
        let modalButton = document.getElementsByTagName('button')[0],
            popupEngineer = document.querySelector('.popup_engineer'),
            popupCloseEngineer = document.querySelector('.popup_engineer .popup_close');
 
        //модальное окно вызов замерщика 
        modalButton.addEventListener('click', function() {
            popupEngineer.style.display = 'block';           
        });
 
        // закрытие модальное окно на крестик вызов замерщика
        popupCloseEngineer.addEventListener('click', function() {
            popupEngineer.style.display = 'none';
            //document.body.style.overflow = '';
          
        });
        
        //закрытие модального окна по клику на подложку
        popupEngineer.addEventListener('click', function(event) {
            if (event.target.classList.contains('popup_engineer')) {
                popupEngineer.style.display = 'none';
            }
           
        });
 
 
       
 
 
 
        let phoneLink = document.querySelector('.phone_link'),
            popup = document.querySelector('.popup'),
            popupCloseColl = document.querySelector('.popup .popup_close');
        
        //открытие модальное окно - Заказать обратный звонок
        phoneLink.addEventListener('click', function() {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        //закрытие модальное окно на крестик - Заказать обратный звонок
        popupCloseColl.addEventListener('click', function() {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        });

        //закрытие модального окна по клику на подложку-Заказать обратный звонок
        popup.addEventListener('click', function(event) {
            if (event.target.classList.contains('popup')) {
                popup.style.display = 'none';
            }
           
        });
 
 
      
       
 
       
    }
 
    modal();
   
 
 
 });
 
 