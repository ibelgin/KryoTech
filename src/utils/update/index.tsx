import database from '@react-native-firebase/database';

function UpdateData(key: String, value: any) {
  const json = JSON.stringify({[key]: value});
  let data = JSON.parse(json);

  database()
    .ref('/')
    .update(data)
    .then(() => console.log('Data updated.'));
}

export {UpdateData};
