// @flow
/* eslint-disable no-underscore-dangle */

import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Icon.css';
import icons from './icons';
import colors from '../Colors.css';

type Props = {
  accessibilityLabel: string,
  color?:
    | 'blue'
    | 'darkGray'
    | 'eggplant'
    | 'gray'
    | 'green'
    | 'lightGray'
    | 'maroon'
    | 'midnight'
    | 'navy'
    | 'olive'
    | 'orange'
    | 'orchid'
    | 'pine'
    | 'purple'
    | 'red'
    | 'watermelon'
    | 'white',
  icon?: $Keys<typeof icons>,
  inline?: boolean,
  size?: number | string,
  dangerouslySetSvgPath?: { __path: string },
};

const IconNames = Object.keys(icons);

export default function Icon(props: Props) {
  const {
    accessibilityLabel,
    color = 'gray',
    icon,
    inline,
    size = 16,
    dangerouslySetSvgPath,
  } = props;

  const cs = classnames(styles.icon, colors[color], {
    [styles.iconBlock]: !inline,
  });

  let path;
  if (icon) {
    path = icons[icon];
  } else if (dangerouslySetSvgPath) {
    path = dangerouslySetSvgPath.__path;
  } else {
    path = '';
  }

  const ariaHidden = accessibilityLabel === '' ? true : null;

  return (
    <svg
      className={cs}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
      aria-label={accessibilityLabel}
      role="img"
    >
      <title>{accessibilityLabel}</title>
      <path d={path} />
    </svg>
  );
}

Icon.icons = IconNames;

Icon.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'blue',
    'darkGray',
    'eggplant',
    'gray',
    'green',
    'lightGray',
    'maroon',
    'midnight',
    'navy',
    'olive',
    'orange',
    'orchid',
    'pine',
    'purple',
    'red',
    'watermelon',
    'white',
  ]),
  dangerouslySetSvgPath: PropTypes.shape({
    __path: PropTypes.string,
  }),
  icon: PropTypes.oneOf(IconNames),
  inline: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
