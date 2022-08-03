import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './SvgIcon.scss';
import { ISvgIconProps } from './SvgIcon.types';

const cx = classNames.bind(styles);

export const SvgIcon: FC<ISvgIconProps> = ({ icon: Svg, isSmall }) => {
  return <Svg className={cx(styles.icon, { 'icon--small': isSmall })} />;
};
