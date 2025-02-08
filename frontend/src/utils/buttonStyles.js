import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #f00;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #eb7979;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #000000;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #212020;
      border-color: #212020;
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #650909;
    color: white;
    &:hover {
      background-color: #eb7979;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #2d4059;
    color: #fff;
    &:hover {
      background-color: #222831;
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #2d4059;
    color: #fff;
    &:hover {
      background-color: #222831;
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background-color: #2d4059;
    color: #fff;
    &:hover {
      background-color: #222831;
    }
  }
`;

export const BasicButton = styled(Button)`
  && {
 background-color: #2d4059;
    color: #fff;
    &:hover {
      background-color: #222831;
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #133104;
    color: #fff;
    &:hover {
      background-color: #266810;
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #2c1006;
    color: white;
    &:hover {
      background-color: #40220c;
      border-color: #40220c;
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
 background-color: #2d4059;
    color: #fff;
    &:hover {
      background-color: #222831;
    }
  }
`;
