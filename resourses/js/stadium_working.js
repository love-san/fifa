/*jshint esversion: 6 */
var url = "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json";

document.addEventListener('DOMContentLoaded', () => {
    (function($) {
        var $window = $(window),
            $menu = $('.ui.menu');

        function resize() {
            if ($window.width() < 580) {
                $menu.addClass('huge');
                return $menu.removeClass('massive');
            }
            $menu.addClass('massive');
            $menu.removeClass('huge');
        }

        $window
            .resize(resize)
            .trigger('resize');
    })(jQuery);
    axios.get(url)
    .then(function(res) {
        res.data.stadiums.forEach(function(data){
            var temp_div = document.createElement('div');
            temp_div.className = 'card';
            temp_div.innerHTML = `<div class=\"background-img\" style=\"background-image: url(
            ${data.image})\"></div><div class=\"wrapper\"></div><p class=\"stadium_info\"><strong>${data.name}</strong>, <em>${data.city}</em></p>`;
            document.querySelector(".container").appendChild(temp_div);
        });
    })
    .catch(function(err) {
        if (err.response) {
            console.log("PROBLLEM WITH RESPONSE!", err.response.status);
        } else if (err.request) {
            console.log("PROBLEM WITH REQUEST!");
        } else {
            console.log("ERROR", err.message);
        }
    });
});
