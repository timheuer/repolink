window.onload = function () {
    var path = window.location.pathname.split('/');
    if (path.length === 5 && path[3] === 'issues') {
        var org = path[1];
        var repo = path[2];
        var issueId = path[4];

        var button = document.createElement('button');
        button.textContent = 'Copy Link';
        button.classList.add('Button--secondary', 'Button--small', 'flex-md-order-2', 'Button');
        button.onclick = function () {
            var textToCopy = org + '/' + repo + '#' + issueId;
            navigator.clipboard.writeText(textToCopy).then(function () {
                console.log('Copying to clipboard was successful!');
            }, function (err) {
                console.error('Could not copy text: ', err);
            });
        };

        var headerActionsDiv = document.querySelector('.gh-header-actions');
        if (headerActionsDiv) {
            headerActionsDiv.appendChild(button);
        }
    }
};