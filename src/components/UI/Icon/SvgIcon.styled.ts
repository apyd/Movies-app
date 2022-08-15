import styled from '@emotion/styled';
import { variables } from '../../../shared/variables.styled';
import { colors } from '../../../shared/colors.styled';
import SearchIcon from '../../../assets/search.svg';
import CalendarIcon from '../../../assets/calendar-symbol.svg';
import ChevronDown from '../../../assets/chevron-down.svg';
import ErrorIcon from '../../../assets/error.svg';
import SuccessIcon from '../../../assets/success.svg';
import ThreeDotsIcon from '../../../assets/threedots.svg';

export const StyledSearchIcon = styled(SearchIcon)`
  fill: ${colors.pastelRed};
  width: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
  height: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
`;

export const StyledCalendarIcon = styled(CalendarIcon)`
  fill: ${colors.pastelRed};
  width: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
  height: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
`;

export const StyledChevronDownIcon = styled(ChevronDown)`
  fill: ${colors.pastelRed};
  width: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
  height: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  fill: ${colors.pastelRed};
  width: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
  height: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
`;

export const StyledSuccessIcon = styled(SuccessIcon)`
  fill: ${colors.pastelRed};
  width: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
  height: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
`;

export const StyledThreeDotsIcon = styled(ThreeDotsIcon)`
  fill: ${colors.pastelRed};
  width: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
  height: ${(props) => (props.isSmall ? '1rem' : `${variables.iconWidth}`)};
`;
