import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as SQLite from 'expo-sqlite';

  export default function EnregP() {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);
  
    return (
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nom"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="nom"
        />
        {errors.nom && <Text>Information imcomplète.</Text>}
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Description"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="desc"
        />
        {errors.desc && <Text>Information imcomplète.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Prix"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="prix"
        />
        {errors.prix && <Text>Information imcomplète.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Quantité"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="quant"
        />
        {errors.quant && <Text>Information imcomplète.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Localisation"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="local"
        />
        {errors.local && <Text>Information imcomplète.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Inventaire"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="invt"
        />
        {errors.invt && <Text>Information imcomplète.</Text>}
  
  
  
  
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    );
  }
  
  

  