import { Bert } from 'meteor/themeteorchef:bert';
import { TAPi18n } from 'meteor/tap:i18n';
import { prop } from 'ramda';

function sendToast(toastClass, message) {
  return Bert.alert(message, toastClass, 'growl-top-right');
}

export function errorHandlingInMethod(error) {
  if (error) {
    return sendToast('danger', prop('message', error));
  }
}

export function updateHandlingInMethod(error) {
  if (error) {
    return sendToast('danger', prop('message', error));
  } else {
    return sendToast('success', TAPi18n.__('updateDone'));
  }
}
