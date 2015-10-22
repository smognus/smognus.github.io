function getConfigData() {
    var tickSetting = document.getElementById('tick_setting_slider');
    var daySetting = document.getElementById('day_setting_slider');
    var batterySetting = document.getElementById('battery_setting_slider');
    var secondStartSetting = document.getElementById('second_hand_start');
    var secondEndSetting = document.getElementById('second_hand_end');
    var digitalSetting = document.getElementById('digital_setting_slider');
    var windowColorSetting = document.getElementById('window_color');
    var windowBorderColorSetting = document.getElementById('window_border_color');
    var windowTextColorSetting = document.getElementById('window_text_color');
    var lightThemeSetting = document.getElementById('light_theme_setting_slider');
    var secondHandColorSetting = document.getElementById('second_hand_color');
    var secondOutlineColorSetting = document.getElementById('second_outline_color');

    var options = {
	'tickSetting': tick_setting_slider.checked,
	'daySetting': day_setting_slider.checked,
	'batterySetting': battery_setting_slider.checked,
	'secondStartSetting': Number(second_hand_start.value),
	'secondEndSetting': Number(second_hand_end.value),
	'digitalSetting': digital_setting_slider.checked,
	'windowColorSetting': window_color.value,
	'windowBorderColorSetting': window_border_color.value,
	'windowTextColorSetting': window_text_color.value,
	'lightThemeSetting': light_theme_setting_slider.checked,
	'secondHandColorSetting': second_hand_color.value,
	'secondOutlineColorSetting': second_outline_color.value
    };

    // Save for next launch
    localStorage['tick_setting'] = options['tickSetting'];
    localStorage['day_setting'] = options['daySetting'];
    localStorage['battery_setting'] = options['batterySetting'];
    localStorage['second_hand_start_setting'] = options['secondStartSetting'];
    localStorage['second_hand_end_setting'] = options['secondEndSetting'];
    localStorage['digital_setting'] = options['digitalSetting'];
    localStorage['window_color'] = options['windowColorSetting'];
    localStorage['window_border_color'] = options['windowBorderColorSetting'];
    localStorage['window_text_color'] = options['windowTextColorSetting'];
    localStorage['light_theme_setting'] = options['lightThemeSetting'];
    localStorage['second_hand_color'] = options['secondHandColorSetting'];
    localStorage['second_outline_color'] = options['secondOutlineColorSetting'];

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
    var digitalSetting = document.getElementById('digital_setting_slider');
    var windowColorSetting = document.getElementById('window_color');
    var windowBorderColorSetting = document.getElementById('window_border_color');
    var windowTextColorSetting = document.getElementById('window_text_color');
    var lightThemeSetting = document.getElementById('light_theme_setting_slider');
    var secondHandColorSetting = document.getElementById('second_hand_color');
    var secondOutlineColorSetting = document.getElementById('second_outline_color');

    // Load any previously saved configuration, if available
    if(localStorage['tick_setting']) {
	console.log('tick_setting found');
	tickSetting.checked = JSON.parse(localStorage['tick_setting']);
    }
    if(localStorage['day_setting']) {
	console.log('day_setting found');
	daySetting.checked = JSON.parse(localStorage['day_setting']);
    }
    if(localStorage['battery_setting']) {
	console.log('battery_setting found');
	batterySetting.checked = JSON.parse(localStorage['battery_setting']);
    }
    if(localStorage['second_hand_start_setting']) {
	console.log('second_hand_start_setting found');
	secondStartSettingSlider.value = JSON.parse(localStorage['second_hand_start_setting']);
    }
    if(localStorage['second_hand_end_setting']) {
	console.log('second_hand_end_setting found');
	secondEndSettingSlider.value = JSON.parse(localStorage['second_hand_end_setting']);
    }
    if(localStorage['second_hand_start_setting']) {
	console.log('second_hand_start_setting found');
	secondStartSettingText.value = JSON.parse(localStorage['second_hand_start_setting']);
    }
    if(localStorage['second_hand_end_setting']) {
	console.log('second_hand_end_setting found');
	secondEndSettingText.value = JSON.parse(localStorage['second_hand_end_setting']);
    }
    if(localStorage['digital_setting']) {
	console.log('digital_setting found');
	digitalSetting.checked = JSON.parse(localStorage['digital_setting']);
    }
    if (localStorage['window_color']) {
	console.log('window_color found');
	windowColorSetting.value = localStorage['window_color'];
    }
    if (localStorage['window_border_color']) {
	console.log('window_border_color found');
	windowBorderColorSetting.value = localStorage['window_border_color'];
    }
    if (localStorage['window_text_color']) {
	console.log('window_text_color found');
	windowTextColorSetting.value = localStorage['window_text_color'];
    }
    if (localStorage['light_theme_setting']) {
	console.log('light_theme_setting found');
	lightThemeSetting.checked = JSON.parse(localStorage['light_theme_setting']);
    }
    if (localStorage['second_hand_color']) {
	console.log('second_hand_color found');
	secondHandColorSetting.value = localStorage['second_hand_color'];
    }
    if (localStorage['second_outline_color']) {
	console.log('second_outline_color found');
	secondOutlineColorSetting.value = localStorage['second_outline_color'];
    }
})();

