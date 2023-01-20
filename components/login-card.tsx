// "use client"

import { getCookie, hasCookie, setCookie } from "cookies-next"
import { Button, Card, CardBody, CardFooter, Stack, Title } from "livi-poc-core"
import { Form, FormGroup, Input, Label } from "livi-poc-form"
import { GetServerSideProps } from "next"
import { redirect } from "next/dist/server/api-utils"
import { FormEvent } from "react"

const Login = () => {
    // const { current } = authState

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCookie('auth-token', e.currentTarget.username.value)
        console.log(getCookie('auth-token'), 'auth-token ----------------------')
        window.location.replace('/')
    }

    // console.log('>> Client Component Test')
    return (
        <Form method="post" onSubmit={handleSubmit}>
            <Card>
                <CardBody>
                    <Stack spacing='md'>
                        <Title className=" text-xl text-center mb-7">Welcome to POC!</Title>
                        <FormGroup override className="grid grid-cols-4">
                            <Label target="username">Username</Label>
                            <Input type='text' id='username' className="col-span-3" validate={() => true}></Input>
                        </FormGroup>
                        <FormGroup override className="grid grid-cols-4">
                            <Label target="password">Password</Label>
                            <Input type='password' id='password' className="col-span-3" validate={() => true}></Input>
                        </FormGroup>
                    </Stack>
                </CardBody>
                <CardFooter className="flex justify-end">
                    <div className="grid grid-cols-2 gap-3 w-1/2">
                        <Button type='button' set='secondary' color="primary" className="w-full">Forget Password</Button>
                        <Button type='submit' set='primary' color="secondary" className="w-full">Login</Button>
                    </div>
                </CardFooter>
            </Card>
        </Form>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // const { current, update } = useAuthState()
    if(hasCookie('auth-token')){
        return {
            redirect: {
                permanent: false,
                destination: ''
            }
        }
    }
    return {
        props: {
            
        }
    }
}

export default Login
