// Modals
var janDialog = document.getElementById('jan-modal');
var marDialog = document.getElementById('mar-modal');
var mayDialog = document.getElementById('may-modal');
var julyDialog = document.getElementById('july-modal');
var septDialog = document.getElementById('sept-modal');
var novDialog = document.getElementById('nov-modal');

//Buttons
var showJanDialogButton = document.querySelector('#jan-dialog');
var showMarDialogButton = document.querySelector('#mar-dialog');
var showMayDialogButton = document.querySelector('#may-dialog');
var showJulyDialogButton = document.querySelector('#july-dialog');
var showSeptDialogButton = document.querySelector('#sept-dialog');
var showNovDialogButton = document.querySelector('#nov-dialog');

//Show modals
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

//Close Modals
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