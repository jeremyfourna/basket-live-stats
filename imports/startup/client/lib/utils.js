import { Bert } from 'meteor/themeteorchef:bert';
import R from 'ramda';

export function sendToast(toastClass, message) {
	return Bert.alert(message, toastClass, 'growl-top-right');
}

export function errorHandlingInMethod(error) {
	if (error) {
		return sendToast('danger', R.prop('message', error));
	}
}
