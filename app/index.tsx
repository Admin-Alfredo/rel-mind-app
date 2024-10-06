import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import * as Contacts from 'expo-contacts';


// const themes = [['red', 'red']]
export default function Index() {
  const [contacts, setContacts] = useState<Contacts.Contact[] | any>([])
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContacts(data);
          console.warn(contacts);
        }
      }
    })();
  }, []);


  return (
    <ScrollView>
      <FlatList data={contacts} renderItem={({item}) => 
        
      }
      />
    </ScrollView>
  );
}
