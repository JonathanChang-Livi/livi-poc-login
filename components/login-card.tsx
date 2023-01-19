import { Button, Card, CardBody, CardFooter, Group, Stack, Title } from "livi-poc-core"
import { Form, FormGroup, Input, Label } from "livi-poc-form"
import dynamic from "next/dynamic"
import { FormEvent } from "react"
import { UseBoundStore, StoreApi } from "zustand"


interface IShareState<T> {
    current: T
    update: (value: T) => void
}

// @ts-ignore
const useAuthState: UseBoundStore<StoreApi<IShareState<string>>> = dynamic(() => import('csm/useAuth'))

const Login = () => {
    const { update } = useAuthState()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // update(e.target.)
        alert(e.currentTarget.username.value)
    }
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

export default Login
