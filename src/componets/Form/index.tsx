import React from 'react'
import './form.css'
import { FormControl, Grid, FormLabel, Input, FormHelperText, Switch, Heading, Button } from '@chakra-ui/react'
import { User } from '../../App';

interface IFormProps {
    form: User;
    setForm: React.Dispatch<React.SetStateAction<User>>
}

export default function Form({ form, setForm }: IFormProps) {

    const onChangeInput = (e: any, key: keyof User) => {
        setForm({ ...form, [key]: e.target.value })
    }
    const handleSubmit = () => {
        console.log(form)
    }
    return (
        <div className='form-container'>
            <Heading as='h3' size='lg' marginBottom={10}>
                Using Cypress
            </Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input onChange={e => { onChangeInput(e, "name") }} type='text' />
                    <FormHelperText>Type your name.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input onChange={e => { onChangeInput(e, "email") }} type='email' />
                    <FormHelperText>Type your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input onChange={e => { onChangeInput(e, "phone") }} type='tel' />
                    <FormHelperText>Type your phone.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Document</FormLabel>
                    <Input onChange={e => { onChangeInput(e, "document") }} type='text' />
                    <FormHelperText>Type your document.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Birthdate</FormLabel>
                    <Input onChange={e => { onChangeInput(e, "birthdate") }} type='date' />
                    <FormHelperText>Type your birthdate.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>You have cars ?</FormLabel>
                    <Switch size='lg' h="40px" onChange={e => { setForm({ ...form, haveCar: e.target.checked }) }} />
                    <FormHelperText>Select if you have a car.</FormHelperText>
                </FormControl>
            </Grid>
            <Button
                onClick={handleSubmit}
                background="purple.700" color="white" size='lg' w="full" marginTop={10}>
                Submit form
            </Button>
        </div>
    )
}
