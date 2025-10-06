$(function () {
    const video = document.getElementById('reels-video');
    if (!video) return;
    // Only try to play if paused — avoids unnecessary play() calls
    if (video.paused) {
        const p = video.play();
        if (p && p.catch) p.catch(err => console.info('Autoplay prevented or failed:', err));
    }

    $(".nav-item").click(function() {
        $(this).siblings()
            .removeClass("active")
            .removeAttr("aria-current");
        $(this)
            .addClass("active")
            .attr("aria-current", "page");
        let tabId = $(this).data("tabId")
        $(`#${tabId}`).show().siblings().hide();

        // mute video on tab change
        video.muted = true
    });
    $(".nav-item").first().click(); // default active tab

    // Home feature click -> open Photos tab
    $('#home-feature').on('click', function() {
        $('.nav-item[data-tab-id="tab-photos"]').click();
    }).on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(this).click();
        }
    });
});