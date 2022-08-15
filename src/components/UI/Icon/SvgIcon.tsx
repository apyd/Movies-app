import React, { FC } from 'react';
import { iconTypes } from './SvgIcon.consts';
import {
  StyledCalendarIcon,
  StyledChevronDownIcon,
  StyledErrorIcon,
  StyledSearchIcon,
  StyledSuccessIcon,
  StyledThreeDotsIcon
} from './SvgIcon.styled';
import { ISvgIconProps } from './SvgIcon.types';

export const SvgIcon: FC<ISvgIconProps> = ({ icon, isSmall }) => (
  <>
    {icon === iconTypes.search && <StyledSearchIcon isSmall={isSmall} />}
    {icon === iconTypes.calendar && <StyledCalendarIcon isSmall={isSmall} />}
    {icon === iconTypes.chevron && <StyledChevronDownIcon isSmall={isSmall} />}
    {icon === iconTypes.error && <StyledErrorIcon isSmall={isSmall} />}
    {icon === iconTypes.success && <StyledSuccessIcon isSmall={isSmall} />}
    {icon === iconTypes.threeDots && <StyledThreeDotsIcon isSmall={isSmall} />}
  </>
);
