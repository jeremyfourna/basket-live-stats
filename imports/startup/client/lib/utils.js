import { Bert } from 'meteor/themeteorchef:bert';

export function sendToast(toastClass, message) {
	return Bert.alert(message, toastClass, 'growl-top-right');
}
