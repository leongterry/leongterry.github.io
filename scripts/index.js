$(function () {
    $(".nav-item").click(function() {
        $(this).siblings()
            .removeClass("active")
            .removeAttr("aria-current");
        $(this)
            .addClass("active")
            .attr("aria-current", "page");
        let tabId = $(this).data("tabId")
        $(`#${tabId}`).show().siblings().hide();
    });
    $(".nav-item").first().click(); // default active tab

    const video = document.getElementById('reels-video');
    if (!video) return;
    // Only try to play if paused — avoids unnecessary play() calls
    if (video.paused) {
        const p = video.play();
        if (p && p.catch) p.catch(err => console.info('Autoplay prevented or failed:', err));
    }
});