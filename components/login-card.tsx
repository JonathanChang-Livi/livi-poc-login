import { Button, Card, CardBody, CardFooter, Group, Stack, Title } from "livi-poc-core"
import { Form, FormGroup, Input, Label } from "livi-poc-form"


const Login = () => {
    return (
        <Form>
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

                        <Button set='secondary' color="primary" className="w-full">Forget Password</Button>
                        <Button set='primary' color="secondary" className="w-full">Login</Button>
                    </div>
                </CardFooter>
            </Card>
        </Form>
    )
}

export default Login
