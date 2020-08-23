import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import {Container} from './styles';

export default function NewButton() {
  return <Container>
    <EntypoIcons name="plus" size={22} color="#000" />
  </Container>;
}