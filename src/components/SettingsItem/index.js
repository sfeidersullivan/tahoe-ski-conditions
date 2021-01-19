import React from 'react';
import PropTypes from 'prop-types';

const SettingItem = ({ id, name, checked, onClick }) => (
  <div>
    <input id={id} type='checkbox' onChange={onClick} checked={checked} />
    <label style={{ margin: 10 }} for={id} >{name}</label>
  </div>
);

SettingItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SettingItem;
