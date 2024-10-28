import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpB4BJFPN7lUBg0JWJbqA5_Uh0P2jsW2M",
  authDomain: "fir-integration-a9603.firebaseapp.com",
  projectId: "fir-integration-a9603",
  storageBucket: "fir-integration-a9603.appspot.com",
  messagingSenderId: "1062968420882",
  appId: "1:1062968420882:web:6bf3ce3ac493a87763c6cb",
  measurementId: "G-CWRRH4643F"
};


export default function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNewAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' onChangeText={setEmail} />
      <TextInput placeholder='Senha' onChangeText={setPassword} />
      <Button title='Cadastrar' onPress={handleNewAccount} />

      {!user ? (
        <Text>Nenhum usuário logado</Text>
      ) : (
        <Text>{`usuário: ${user.email}`}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});