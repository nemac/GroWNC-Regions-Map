(function ($) {
    $(document).ready(function () {
        var mapRegions = $(".page-geographic-areas .grownc-link"),
            mapPopupContainer = $("#grownc-region-map-tooltip"),
            mapPopupText = $("#grownc-region-map-tooltip h3"),
            targetedClass = "disabled-region";

        var displayMapPopup = function (elem) {
            var title = elem.attr("title");
            mapPopupContainer.css({
                "display" : "block"
            });
            mapPopupText.text(title);
            elem.attr("data-title", title);
            elem.attr("title", "");
        };

        var hideMapPopup = function (elem) {
            mapPopupContainer.css("display", "none");
            elem.attr("title", elem.attr("data-title"));
        };

        mapRegions.hover(function () {
            var $this = $(this);
            mapRegions.addClass(targetedClass);
            $this.removeClass(targetedClass);
            displayMapPopup($this);
        }, function () {
            mapRegions.removeClass(targetedClass);
            hideMapPopup($(this));
        });

        $(".page-geographic-areas .view-content h5").hover(function () {
            mapRegions.addClass(targetedClass);
            var href = $(this).children("a").attr("href");
            $(".page-geographic-areas .grownc-link[href='" + href + "']").removeClass(targetedClass);
        },
        function () {
            mapRegions.removeClass(targetedClass);
        });
    });
}(window.jQuery));