import React from 'react'
import './form.css'
import { FormControl, Grid, FormLabel, Input, FormHelperText, Switch,Heading, Button } from '@chakra-ui/react'
import { User } from '../../App';

interface IFormProps {
    form: User;
    setForm: React.Dispatch<React.SetStateAction<User>>
}

export default function Form({ form, setForm }: IFormProps) {

    return (
        <div className='form-container'>
            <Heading as='h3' size='lg' marginBottom={10}>
                Using Cypress
            </Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input type='tel' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Document</FormLabel>
                    <Input type='text' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Birthdate</FormLabel>
                    <Input type='date' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Birthdate</FormLabel>
                    <Switch size='lg' h="40px"/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                
            </Grid>
            <Button background="purple.700" color="white" size='lg' w="full" marginTop={10}>
                Submit form
            </Button>
        </div>
    )
}
