import React, {useCallback, useContext, useMemo, useState} from 'react';
import {ContentTooLargeAPIError, InputValidationAPIError} from '../../../../api/api';
import {apiContext} from '../../../../api/context';
import {Modal} from '../../../modal/Modal';
import {ContactUsFormView} from './ContactUsFormView';

export function ContactUsForm(props) {
  const api = useContext(apiContext);
  const [value, setValue] = useState({
    name: '',
    email: '',
    projectDescription: '',
    agreement: false
  });
  const [errors, setErrors] = useState({});
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);
  const isReadyToSend = useMemo(() => {
    return !sending && value.name && value.email && value.agreement && !hasErrors;
  }, [value, hasErrors, sending]);
  const onChange = useCallback((nextValue) => {
    if (hasErrors) {
      const nextErrors = {...errors};
      let hasChanged = false;
      for (const key of Object.keys(errors)) {
        if (value[key] !== nextValue[key]) {
          delete nextErrors[key];
          hasChanged = true;
        }
      }
      if (hasChanged) {
        setErrors(nextErrors);
      }
    }
    setValue(nextValue);
  }, [value, errors, hasErrors, setErrors, setValue]);
  const onSend = useCallback(
    async () => {
      if (isReadyToSend) {
        try {
          setSending(true);
          const formData = {
            name: value.name,
            email: value.email,
            projectDescription: value.projectDescription,
            phone: value.phone,
          };
          await api.sendProjectDescription(formData, value.resume);
          setNotificationMessage('Done!');
          setIsNotificationOpen(true);
          setValue({
            name: '',
            email: '',
            projectDescription: '',
            agreement: false
          });
        } catch (error) {
          if (error instanceof ContentTooLargeAPIError) {
            setErrors({
              attachment: 'Too large. Limit is 5mb.',
            });
          } else if (error instanceof InputValidationAPIError) {
            setErrors(error.details);
          } else {
            setNotificationMessage('Something went wrong :(');
            setIsNotificationOpen(true);
          }
        } finally {
          setSending(false);
        }
      }
    },
    [value, isReadyToSend, setSending, setIsNotificationOpen, setNotificationMessage]
  );


  return (
    <div>
      <ContactUsFormView
        value={value}
        onChange={onChange}
        sendDisabled={!isReadyToSend}
        errors={errors}
        onSend={onSend}
      />
      <Modal.Notification
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      >
        {notificationMessage}
      </Modal.Notification>
    </div>
  );
}
