
function getConfigData() {
    var tickSetting = document.getElementById('tick_setting_slider');
    var daySetting = document.getElementById('day_setting_slider');
    var invertSetting = document.getElementById('invert_setting_slider');

    var options = {
	'tickSetting': tick_setting_slider.checked,
	'daySetting': day_setting_slider.checked,
	'invertSetting': invert_setting_slider.checked 
    };

    // Save for next launch
    localStorage['tick_setting'] = options['tickSetting'];
    localStorage['day_setting'] = options['daySetting'];
    localStorage['invert_setting'] = options['invertSetting'];

    console.log('Got options: ' + JSON.stringify(options));
    return options;
}

function getQueryParam(variable, defaultValue) {
    var query = location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
	var pair = vars[i].split('=');
	if (pair[0] === variable) {
            return decodeURIComponent(pair[1]);
	}
    }
    return defaultValue || false;
}

var submitButton = document.getElementById('submit_button');
submitButton.addEventListener('click', function() {
    console.log('Submit');

    // Set the return URL depending on the runtime environment
    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getConfigData()));
});

(function() {
    var tickSetting = document.getElementById('tick_setting_slider');
    var daySetting = document.getElementById('day_setting_slider');
    var invertSetting = document.getElementById('invert_setting_slider');

    // Load any previously saved configuration, if available
    if(localStorage['tick_setting']) {
	tickSetting.checked = JSON.parse(localStorage['tick_setting']);
	daySetting.checked = JSON.parse(localStorage['day_setting']);
	invertSetting.checked = JSON.parse(localStorage['invert_setting']);
    }
})();

