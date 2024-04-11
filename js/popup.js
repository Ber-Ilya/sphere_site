let popupForm = document.querySelectorAll('._popup-form')[0];

function popupSetting() {
  popupForm.classList.toggle('__active');
}
function toggleBurgerClass() {
  let headerContent = document.querySelector('.header__content');
  headerContent.classList.toggle('__burger-active');
}


// function saveToLocalStorage(key, value) {
//   localStorage.setItem(key, value);
// }

// function removeFromLocalStorage(key) {
//   localStorage.removeItem(key);
// }

// function handleSubmit(event) {
//   event.preventDefault();

//   const form = event.target;
//   const input = form.querySelector('input');
//   const inputValue = input.value;

//   const popup = document.querySelector('.__popup-thank');

//   setTimeout(() => {
//     saveToLocalStorage(form.id, inputValue);
//     popup.classList.add('__active');

//     setTimeout(() => {
//       removeFromLocalStorage(form.id);
//       popup.classList.remove('__active');
//     }, 3000);
//   }, 1000);
// }

// const forms = document.querySelectorAll('.myForm');

// forms.forEach(form => {
//   form.addEventListener('submit', handleSubmit);
// });

// document.addEventListener('DOMContentLoaded', () => {
//   forms.forEach(form => {
//       const savedValue = localStorage.getItem(form.id);
//       const input = form.querySelector('input');
//       const popup = document.querySelector('.__popup-thank');
//       const popup_form = document.querySelector('._popup-form');
      
//     if (savedValue) {
//       input.value = savedValue;
//       popup.classList.add('__active');
      
//       console.log('give class');
//       setTimeout(() => {
//         localStorage.removeItem(form.id);
//       //   if(popup.classList('__active')){
//           popup.classList.remove('__active');
//       //   }
//           // if(popup_form.classList('__active')){
//           //     popup_form.classList.remove('__active');
//           // }else{
//           //     console.log('jnjec');
//           // }
//         console.log('delete class, clear store')
//       }, 2000);
//     }
//   });
// });
