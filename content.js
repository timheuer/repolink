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
            var linkText = org + '/' + repo + '#' + issueId;
            var linkUrl = window.location.pathname;

            navigator.clipboard.write([
                new ClipboardItem({
                    "text/plain": new Blob([linkText], { type: 'text/plain' }),
                    "text/html": new Blob([`<a href="${linkUrl}">${linkText}</a>`], { type: 'text/html' })
                })
            ]);
        };

        var headerActionsDiv = document.querySelector('.gh-header-actions');

        if (headerActionsDiv) {
            headerActionsDiv.appendChild(button);
        }
    }
};