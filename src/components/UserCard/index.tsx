import { SimpleGrid, Card, CardBody, Divider, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from '@chakra-ui/react'
import { User } from '../../App'

export default function UserCard({ user }: { user: User }) {
    const { name } = user
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://tjcc.com.br/wp-content/uploads/2021/11/shutterstock_1841020897-680x380.jpg'
                    alt='User Photo'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </Stack>
                <Divider />
                <SimpleGrid columns={[1, 2]} spacing='40px' marginTop={5} marginBottom={5}>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input value={user["email"]} type='email' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone</FormLabel>
                        <Input value={user["phone"]} type='tel' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Document</FormLabel>
                        <Input value={user["document"]} type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Birthdate</FormLabel>
                        <Input value={user["birthdate"]} type='date' />
                    </FormControl>
                </SimpleGrid>
            </CardBody>
            <Divider />
        </Card>
    )
}
