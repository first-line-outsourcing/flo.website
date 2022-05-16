import React, {useCallback, SyntheticEvent} from 'react';
import {Button} from '../../buttons/Button';
import {Input} from './components/Input';
import {Label} from './components/Label';
import * as styles from './ContactUsFormView.module.css';
import classNames from 'classnames';

/**
 * Contact Us form
 *
 * @typedef {{name: string, email: string, phone?: string, projectDescription: string, attachment?: File, agreement: boolean}} Value
 *
 * @param {Value} props.value
 * @param {(value: Value) => void} props.onChange
 * @param {boolean} props.sendDisabled
 * @param {(value: Value) => void} props.onSend
 * @returns {JSX.Element}
 * @constructor
 */
export function ContactUsFormView(props) {
  const onChange = useCallback(
    (field) => (valueOrEvent) => {
      let value;

      if (valueOrEvent && valueOrEvent.target) {
        value = valueOrEvent.target.value;
      } else {
        value = valueOrEvent;
      }

      if (value !== props.value[field]) {
        const next = {
          ...props.value,
        };

        next[field] = value;
        props.onChange(next);
      }
    },
    [props.value, props.onChange]
  );
  const onSend = useCallback(() => props.onSend(props.value), [props.value, props.onSend]);


  return (
    <div>
      <div className={styles.row}>
        <Label>Full name</Label>
        <Input
          value={props.value.name}
          onChange={onChange('name')}
        />
      </div>
      <div className={classNames(styles.row, styles.responsive)}>
        <div className={styles.row}>
          <Label>Email address</Label>
          <Input
            type="email"
            value={props.value.email}
            onChange={onChange('email')}
          />
        </div>
        <div className={styles.row}>
          <Label>Phone number (optional)</Label>
          <Input.Phone
            value={props.value.phone}
            onChange={onChange('phone')}
          />
        </div>
      </div>
      <div className={styles.row}>
        <Label>Describe your project</Label>
        <Input.TextArea
          value={props.value.projectDescription}
          onChange={onChange('projectDescription')}
          maxLength={200}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.agree}>
          <Input.Checkbox
            className={styles.checkbox}
            checked={props.value.agreement}
            onChecked={onChange('agreement')}
          />
          <span>
            I agree with <a href="__LINK__">Privacy Policy Politic</a> which use on this site
          </span>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          theme="accent"
          size="xl"
          responsiveFull
          disabled={props.sendDisabled}
          onClick={onSend}
        >Send message</Button>
      </div>
    </div>
  );
}
