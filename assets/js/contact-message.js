// Contact page message form.
// GitHub Pages can't process forms, so messages go to the form service URL in
// the form's data-endpoint (e.g. https://formspree.io/f/xxxxxxx). If that's
// empty or the post fails, a prefilled email opens instead so nothing is lost.
(function () {
    var form = document.getElementById('message-form');
    if (!form) return;
    var interest = document.getElementById('interest');
    var result = document.getElementById('form_result');
    var button = form.querySelector('button[type="submit"]');
    var EMAIL = 'info@axiomtechnologyservices.com';

    // Preselect the request type from the home page links (#assessment / #intro-call)
    // and from the two buttons above the form.
    var fromHash = {
        '#assessment': 'Fixed-fee assessment',
        '#intro-call': 'Free 15-minute intro call'
    };
    if (fromHash[window.location.hash]) interest.value = fromHash[window.location.hash];
    document.querySelectorAll('[data-interest]').forEach(function (link) {
        link.addEventListener('click', function () {
            interest.value = link.getAttribute('data-interest');
        });
    });

    function show(kind, html) {
        result.className = 'alert d-block alert-' + kind;
        result.innerHTML = html;
    }

    function openEmail(data) {
        var body = 'Name: ' + data.get('name') + '\n' +
            'Email: ' + data.get('email') + '\n' +
            'Company: ' + data.get('company') + '\n' +
            'Interested in: ' + data.get('interest') + '\n\n' +
            data.get('message') + '\n';
        window.location.href = 'mailto:' + EMAIL +
            '?subject=' + encodeURIComponent(data.get('interest') + ' request') +
            '&body=' + encodeURIComponent(body);
        show('info', 'Your email app should open with your message ready to send. ' +
            'If it doesn’t, email us at <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.');
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(form);
        if (data.get('_gotcha')) return;
        var endpoint = form.getAttribute('data-endpoint');
        if (!endpoint) {
            openEmail(data);
            return;
        }
        button.disabled = true;
        fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
            .then(function (response) {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                form.reset();
                show('success', 'Thanks, we have your message and will reply by email.');
            })
            .catch(function () {
                openEmail(data);
            })
            .finally(function () {
                button.disabled = false;
            });
    });
})();
