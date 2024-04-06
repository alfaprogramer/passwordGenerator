/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Text, View } from 'react-native';


//form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'should be max of 16 character')
    .required('length is required')
})


function App(): React.JSX.Element {


  const [password, setpassword] = useState('')
  const [ispassgenerated, setispassgenerated] = useState(false)
  const [lowercase, setlowercase] = useState(true)
  const [uppercase, setuppercase] = useState(false)
  const [numbers, usenumbers] = useState(true)
  const [symbols, usesymbols] = useState(true)

  const generatePasswordString = (passwordLength: number)=>{

  }

  const createPassword = (characters: string, passwordLength: number) => {
     let result = ''
     for (let i=0; i< passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
     }
     return result 
  }
  

  const resetPasswordState = () =>{

  }


  return (
    <View>
      <Text>App</Text>
    </View>

  )



}


export default App;
