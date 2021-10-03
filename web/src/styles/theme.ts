import { Theme } from '@emotion/react';

export const LightMode: Theme = {
  name: 'light',
  color: {
    textColor: '#1e2222',
    reverseTextColor: '#fcfcfc',
    body: 'white',
    body2: '#fafafa',
    body3: '#e8e8e8',
    footer: '#fbfbfb',
    label: '#8b9999',
    placeholder: '#c1c5c5',
    line: '#929696',
    background: '#f5f5f5',
    offWhite: '#fcfcfc',
    primary: '#2ac1bc',
    primary2: '#a0e1e0',
    primary3: '#219a95',
    recommand: '#0B3C49',
    error: '#f45452',
    borderGray: 'rgb(238, 238, 238)',
    hover: '#ececec',
  },
};

export const DarkMode: Theme = {
  name: 'dark',
  color: {
    textColor: '#fcfcfc',
    reverseTextColor: '#1e2222',
    body: '#3c3e3e',
    body2: '#353535',
    body3: '#2a2f2f',
    footer: '#252525',
    label: '#f5f5f5',
    placeholder: ' #f5f5f5',
    line: '#ccd3d3',
    background: '#1e2222',
    offWhite: '#fcfcfc',
    primary: '#2ac1bc',
    primary2: '#a0e1e0',
    primary3: '#219a95',
    recommand: '#0B3C49',
    error: '#f45452',
    borderGray: '#5d5d5d',
    hover: 'black',
  },
};