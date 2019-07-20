"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const secondHand = document.querySelector('.second__hand');
const minuteHand = document.querySelector('.min__hand');
const hourHand = document.querySelector('.hour__hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hours = now.getHours();
  const hoursDegrees = ((hours / 24) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);


