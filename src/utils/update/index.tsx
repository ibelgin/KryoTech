import database from '@react-native-firebase/database';

function UpdateData(key: String, value: any) {
  database()
    .ref('/' + key + '/')
    .update(value)
    .then(() => console.log('Data updated.'));
}

export {UpdateData};
