import database from '@react-native-firebase/database';
import {Alert} from 'react-native';

function UpdateData(key: String, value: any) {
  const json = JSON.stringify({[key]: value});
  let data = JSON.parse(json);

  database()
    .ref('/')
    .update(data)
    .then(() => Alert.alert('KryoTech', 'Value Updated successfully`'));
}

export {UpdateData};
