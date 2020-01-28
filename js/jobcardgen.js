$(document).ready(function() {

    // ======================================================
    // ================= card number input ==================
    // ======================================================

    var cardvolume = 3;

    // ======================================================
    // ============= card generation equation ===============
    // ======================================================

    var el = $(".cardgen");

    for (var i = 1; i < cardvolume; i++) {
        el.clone().removeClass("cardgen").addClass('job' + i).insertBefore("#anotherjob");

    }

    //document.getElementById("overlay").setAttribute('style', "min-height :" + 200 + "px");

    // ======================================================
    // =========== add job number to first card =============
    // ======================================================

    $(".cardgen").addClass('job0');

});