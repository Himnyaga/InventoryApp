import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

  export default function ProfileScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
  
    return (
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text>This field is required.</Text>}
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && <Text>This field is required.</Text>}
  
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    );
  }

  