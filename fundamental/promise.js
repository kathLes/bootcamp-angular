$.ajax({
	url: 'api/books'
})
.success(function(){})
.error(function(){});

// VS
$.ajax({
	url: 'api/books'
}, success, error)

function success(){}
function error(){}

// promise
fetch('/').then(()=>{});

// Callback
fetch('/', success);
