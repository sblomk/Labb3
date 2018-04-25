document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

var showTemplateDialog = function() {
  var dialog = document.getElementById('my-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};

var showTemplateDialogShare = function() {
  var dialog = document.getElementById('share');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('share.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideDialogShare = function(id) {
  document
    .getElementById(id)
    .hide();
};