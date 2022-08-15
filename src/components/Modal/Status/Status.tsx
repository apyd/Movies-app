import React, { FC, ReactNode } from 'react';
import { SvgIcon } from '../../UI/Icon/SvgIcon';
import { IStatusContentProps } from './Status.types';
import { StatusModal } from './Status.styled';
import { iconTypes } from '../../UI/Icon/SvgIcon.consts';

export const status_icon: { [key: string]: ReactNode } = {
  SUCCESS: <SvgIcon icon={iconTypes.success} isSmall={false} />,
  ERROR: <SvgIcon icon={iconTypes.error} isSmall={false} />
};

export const status_text: { [key: string]: string } = {
  SUCCESS: 'Action performed succesfully.',
  ERROR: 'Action cannot be performed. Please contact administrator.'
};

export const Status: FC<IStatusContentProps> = ({ status }) => {
  const Icon = status_icon[status];
  return (
    <StatusModal>
      {Icon}
      <p>{status_text[status]}</p>
    </StatusModal>
  );
};
