/**
 *
 * SocialBar
 *
 * Organism
 */

import IconButton from 'atoms/IconButton';
import PropTypes from 'prop-types';
import IconGroup from 'molecules/IconGroup';
import React from 'react';

export const Socials = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/charliecarsonkids',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/charliecarsonkids',
  },
  {
    name: 'mail',
    url: 'support@charliecarsonkids.com',
  },
];

export const SocialBar = ({ iconWidth }) => (
  <IconGroup>
    {Socials.map(s => (
      <IconButton key={`icon_button${s.name}`} {...s} width={iconWidth} />
    ))}
  </IconGroup>
);

SocialBar.defaultProps = {
  iconWidth: '40',
};

SocialBar.propTypes = {
  iconWidth: PropTypes.string,
};

export default SocialBar;