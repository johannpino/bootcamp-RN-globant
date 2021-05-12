import {
    Alert
} from 'react-native';

export const removeAccents = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const faseActual = (item, info) => {
    const index = parseInt(info.data[3].indexOf(item), 10);
    return info.data[info.data.length - 2][index];
};

export const handlePress = (actualPhase) => {
    Alert.alert(
        '¡Hola! Te informamos que',
        `La comuna se encuentra en: ${actualPhase}`,
        [
            {
                text: 'Aceptar',
                style: 'ok',
            },
        ],
    );
};