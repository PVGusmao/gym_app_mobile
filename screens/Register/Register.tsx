import { useForm, Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ButtonWrapper, Container, ContainerInputIcon, ErrorLine, StyledInput, Title } from "./style";

import { useNavigation } from '@react-navigation/native';

import { ButtonComponent } from "../../components/Button/Button";
import { api } from '../../utils/api';

const schema = yup.object({
  name: yup.string().required('Necessário preencher o nome.').min(3, 'Deve ter pelo menos 3 caracteres.'),
  last_name: yup.string().required('Necessário preencher o sobrenome.').min(3, 'Deve ter pelo menos 3 caracteres.'),
  birth_date: yup.string().required('Necessário preencher a data de nascimento.'),
  gender: yup.string().required('Necessário preencher a data de nascimento.').min(1).max(1, 'Preencha com F ou M'),
  email: yup.string().required('Necessário preencher a data de nascimento.').email('Precisa ser um e-mail!'),
  password: yup.string().required('Necessário preencher a data de nascimento.')
}).required();

export function Register() {

  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  async function onSubmit(data: any) {
    const response = await api.post('/register', data)
    .catch((e) => console.log(e.response.data.message));

    return response;
  }

  return (
    <Container>
      <ScrollView style={{
        marginTop: 30,
      }}>
        <Title>Register Screen</Title>

        <ContainerInputIcon>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, value, onBlur } }) => (
              <StyledInput
                placeholder="Insira o nome *"
                placeholderTextColor='rgba(161, 161, 161, 1)'
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
          />
        </ContainerInputIcon>

        {
          errors.name?.message && <ErrorLine>{errors?.name?.message}</ErrorLine>
        }

        <ContainerInputIcon>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, value, onBlur } }) => (
              <StyledInput
                placeholder="Insira o sobrenome *"
                placeholderTextColor='rgba(161, 161, 161, 1)'
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
              />
            )}
          />
        </ContainerInputIcon>

        {
          errors.last_name?.message && <ErrorLine>{errors.last_name?.message}</ErrorLine>
        }

        <ContainerInputIcon>
          <Controller
            control={control}
            name="birthDate"
            render={({ field: { onChange, value, onBlur } }) => (
              <StyledInput
                placeholder="Data de nascimento *"
                placeholderTextColor='rgba(161, 161, 161, 1)'
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange((value))}
                keyboardType={"numeric"}
              />
            )}
          />
        </ContainerInputIcon>

        {
          errors.last_name?.message && <ErrorLine>{errors.birth_date?.message}</ErrorLine>
        }

        <ContainerInputIcon>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value, onBlur } }) => (
              <StyledInput
                placeholder="Qual gênero você se define *"
                placeholderTextColor='rgba(161, 161, 161, 1)'
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange((value))}
              />
            )}
          />
        </ContainerInputIcon>

        {
          errors.last_name?.message && <ErrorLine>{errors.gender?.message}</ErrorLine>
        }

        <ContainerInputIcon>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <StyledInput
                placeholder="Qual seu email *"
                placeholderTextColor='rgba(161, 161, 161, 1)'
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange((value))}
              />
            )}
          />
        </ContainerInputIcon>

        {
          errors.last_name?.message && <ErrorLine>{errors.email?.message}</ErrorLine>
        }

        <ContainerInputIcon>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <StyledInput
                placeholder="Digite seu password *"
                placeholderTextColor='rgba(161, 161, 161, 1)'
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange((value))}
              />
            )}
          />
        </ContainerInputIcon>

        {
          errors.last_name?.message && <ErrorLine>{errors.password?.message}</ErrorLine>
        }

        <ButtonWrapper>
          <ButtonComponent
            onPress={handleSubmit((data) => {
              onSubmit(data);
              navigation.goBack();
            })}
            title='Registrar'
            mt={25}
          />
            
          <ButtonComponent
            bgColor="OUTLINE"
            onPress={() => {
              navigation.goBack();
            }}

            title='Voltar'
            mt={10}
          />
        </ButtonWrapper>


        </ScrollView>
      </Container>
  )
}