import React from 'react';
import { Button } from '../../UI/Button/Button';
import { DatePicker } from '../../UI/DatePicker/DatePicker';
import { MultiSelect } from '../../UI/MultiSelect/MultiSelect';
import { Textarea } from '../../UI/Textarea/Textarea';
import { TextInput } from '../../UI/TextInput/TextInput';
import { useMultiSelect } from '../../../hooks/useMultiSelect';
import { ButtonType } from '../../UI/Button/Button.consts';
import './MovieForm.scss';

export const MovieForm = () => {
  const { selected, toggleOption, options, label } = useMultiSelect('Genres');

  return (
    <form className="form">
      <div className="inputs--wrapper">
        <div className="form__column">
          <TextInput id="title" name="title" placeholder="title" label="title" />
          <TextInput id="movie-url" name="movieUrl" placeholder="movie url" label="movie url" />
          <MultiSelect
            selected={selected}
            toggleOption={toggleOption}
            options={options}
            label={label}
          />
        </div>
        <div className="form__column form__column--half-size">
          <DatePicker
            id="date-picker"
            name="date-picker"
            placeholder="date picker"
            label="date picker"
          />
          <TextInput
            id="vote_average"
            name="vote_average"
            placeholder="vote_average"
            label="vote_average"
          />
          <TextInput id="runtime" name="runtime" placeholder="runtime" label="runtime" />
        </div>
      </div>
      <Textarea id="overview" name="overview" placeholder="overview" label="overview" />
      <div className="form__actions">
        {/*eslint:disable-next-line:no-empty*/}
        <Button variant={ButtonType.secondary} onClick={() => {}}>
          Reset
        </Button>
        {/*eslint:disable-next-line:no-empty*/}
        <Button onClick={() => {}}>Submit</Button>
      </div>
    </form>
  );
};
