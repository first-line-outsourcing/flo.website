import React, {useCallback, SyntheticEvent, useMemo} from 'react';
import {Button} from '../../../buttons/Button';
import {Input} from '../components/Input';
import {Label} from '../components/Label';
import * as styles from '../forms.module.css';
import classNames from 'classnames';
import {nanoid} from 'nanoid';

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
  const ids = useMemo(() => ({
    name: nanoid(),
    email: nanoid(),
    phone: nanoid(),
    projectDescription: nanoid(),
    attachment: nanoid(),
    agreement: nanoid(),
  }), []);


  return (
    <div>
      <div className={styles.row}>
        <Label for={ids.name}>Full name</Label>
        <Input
          id={ids.name}
          value={props.value.name}
          onChange={onChange('name')}
        />
      </div>
      <div className={classNames(styles.row, styles.responsive)}>
        <div className={styles.row}>
          <Label for={ids.email}>Email address</Label>
          <Input
            id={ids.email}
            type="email"
            value={props.value.email}
            onChange={onChange('email')}
          />
        </div>
        <div className={styles.row}>
          <Label for={ids.phone}>Phone number (optional)</Label>
          <Input.Phone
            id={ids.phone}
            value={props.value.phone}
            onChange={onChange('phone')}
          />
        </div>
      </div>
      <div className={styles.row}>
        <Label for={ids.link}>File</Label>
        <Input.InputFile
          id={ids.attachment}
          onFile={onChange('attachment')}
        />
      </div>
      <div className={styles.row}>
        <Label for={ids.projectDescription}>Describe your project</Label>
        <Input.TextArea
          id={ids.projectDescription}
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