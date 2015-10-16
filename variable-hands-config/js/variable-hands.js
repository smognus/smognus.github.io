function getConfigData() {
    var tickSetting = document.getElementById('tick_setting_slider');
    var daySetting = document.getElementById('day_setting_slider');
    var batterySetting = document.getElementById('battery_setting_slider');
    var secondStartSetting = document.getElementById('second_hand_start');
    var secondEndSetting = document.getElementById('second_hand_end');

    var options = {
	'tickSetting': tick_setting_slider.checked,
	'daySetting': day_setting_slider.checked,
	'batterySetting': battery_setting_slider.checked,
	'secondStartSetting': Number(second_hand_start.value),
	'secondEndSetting': Number(second_hand_end.value)
    };

    // Save for next launch
    localStorage['tick_setting'] = options['tickSetting'];
    localStorage['day_setting'] = options['daySetting'];
    localStorage['battery_setting'] = options['batterySetting'];
    localStorage['second_hand_start_setting'] = options['secondStartSetting'];
    localStorage['second_hand_end_setting'] = options['secondEndSetting'];

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
    var batterySetting = document.getElementById('battery_setting_slider');
    var secondStartSettingSlider = document.getElementById('second_hand_start_actual_slider');
    var secondEndSettingSlider = document.getElementById('second_hand_end_actual_slider');
    var secondStartSettingText = document.getElementById('second_hand_start');
    var secondEndSettingText = document.getElementById('second_hand_end');

    // Load any previously saved configuration, if available
    if(localStorage['tick_setting']) {
	tickSetting.checked = JSON.parse(localStorage['tick_setting']);
	daySetting.checked = JSON.parse(localStorage['day_setting']);
	batterySetting.checked = JSON.parse(localStorage['battery_setting']);
	secondStartSettingSlider.value = JSON.parse(localStorage['second_hand_start_setting']);
	secondEndSettingSlider.value = JSON.parse(localStorage['second_hand_end_setting']);
	secondStartSettingText.value = JSON.parse(localStorage['second_hand_start_setting']);
	secondEndSettingText.value = JSON.parse(localStorage['second_hand_end_setting']);
    }
})();

