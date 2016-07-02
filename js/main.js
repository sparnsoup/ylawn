"use strict";

// Calendar Modals
var janDialog = document.getElementById('jan-modal');
var marDialog = document.getElementById('mar-modal');
var mayDialog = document.getElementById('may-modal');
var julyDialog = document.getElementById('july-modal');
var septDialog = document.getElementById('sept-modal');
var novDialog = document.getElementById('nov-modal');

// Yard 1 Modals
var mowModal1 = document.getElementById('mow-modal1');

//CalendarButtons
var showJanDialogButton = document.querySelector('#jan-dialog');
var showMarDialogButton = document.querySelector('#mar-dialog');
var showMayDialogButton = document.querySelector('#may-dialog');
var showJulyDialogButton = document.querySelector('#july-dialog');
var showSeptDialogButton = document.querySelector('#sept-dialog');
var showNovDialogButton = document.querySelector('#nov-dialog');

//Yard 1 Buttons
var showMowModalButton1 = document.querySelector('#NewMow1');

//Show Yard 1 modals
showMowModalButton1.addEventListener('click', function () {
    mowModal1.showModal();
});

//Close Yard 1 Modals
mowModal1.querySelector('.close').addEventListener('click', function () {
    mowModal1.close();
});

//Show calendar modals
showJanDialogButton.addEventListener('click', function () {
    janDialog.showModal();
});
showMarDialogButton.addEventListener('click', function () {
    marDialog.showModal();
});
showMayDialogButton.addEventListener('click', function () {
    mayDialog.showModal();
});
showJulyDialogButton.addEventListener('click', function () {
    julyDialog.showModal();
});
showSeptDialogButton.addEventListener('click', function () {
    septDialog.showModal();
});
showNovDialogButton.addEventListener('click', function () {
    novDialog.showModal();
});

//Close Calendar Modals
janDialog.querySelector('.close').addEventListener('click', function () {
    janDialog.close();
});
marDialog.querySelector('.close').addEventListener('click', function () {
    marDialog.close();
});
mayDialog.querySelector('.close').addEventListener('click', function () {
    mayDialog.close();
});
julyDialog.querySelector('.close').addEventListener('click', function () {
    julyDialog.close();
});
septDialog.querySelector('.close').addEventListener('click', function () {
    septDialog.close();
});
novDialog.querySelector('.close').addEventListener('click', function () {
    novDialog.close();
});