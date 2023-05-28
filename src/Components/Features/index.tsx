import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text } from "@chakra-ui/react"

export default function Features() {

    const data = [
        {
            placement: "Inglaterra",
            abrev_placement: "UK",
            description: "description",
            price_start: 897,
            id: 1
        },
        {
            placement: "Inglaterra",
            abrev_placement: "UK",
            description: "description",
            price_start: 897,
            id: 1
        },
        {
            placement: "Inglaterra",
            abrev_placement: "UK",
            description: "description",
            price_start: 897,
            id: 1
        },
        {
            placement: "Inglaterra",
            abrev_placement: "UK",
            description: "description",
            price_start: 897,
            id: 1
        },
        {
            placement: "Inglaterra",
            abrev_placement: "UK",
            description: "description",
            price_start: 897,
            id: 1
        },
        {
            placement: "Inglaterra",
            abrev_placement: "UK",
            description: "description",
            price_start: 897,
            id: 1
        },

    ]

    return (
        <div className="features">
            <div className="heading">Encontre seu destino</div>
            {data.map((country, index) => {
                return (
                    <div className={`feature__box`}>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{country.placement}]</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $450
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        Buy now
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue'>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </div>
                )
            })}
        </div>
    )





}




{/* <div className={`feature__box`}>
                        <picture className="feature__box__picture">
                            <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/londres-big-ben.jpeg?quality=70&strip=info&w=925&w=636" alt="" />
                        </picture >
                        <div className="feature__box__content">
                            <h3 className="feature__box__title heading-3">{country.placement}</h3>
                            <div className="feature__box__location">{country.abrev_placement}</div>
                            <p className="feature__box__description">{country.description}</p>
                            <div className="feature__box__price">${country.price_start}</div>
                            <button className="feature__box__btn btn">Comprar agora</button>
                        </div>
                    </div> */}