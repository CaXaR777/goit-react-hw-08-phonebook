// import React from 'react';
import * as s from './Filter.styled';
import { FaSkull } from 'react-icons/fa';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filter';
import { selectFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <s.Label>
      <s.Container>
        <s.Text>Find your target</s.Text>
        <FaSkull fill="yellow" />
      </s.Container>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </s.Label>
  );
};
