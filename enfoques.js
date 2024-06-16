document.addEventListener('DOMContentLoaded', function() {
    var enfoquesLinks = document.querySelectorAll('#enfoques a');

    enfoquesLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetInfo = document.getElementById(targetId);

            var infoItems = document.querySelectorAll('.info-item');
            infoItems.forEach(function(item) {
                item.classList.remove('active');
            });

            if (targetInfo) {
                targetInfo.classList.add('active');
            }
        });
    });
});
