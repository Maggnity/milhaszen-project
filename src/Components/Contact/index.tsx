import { Input, InputGroup, InputLeftElement, InputRightElement, Stack } from "@chakra-ui/react";
import ContactSVG from "../../assets/img/contact.svg";
import PhoneIcon from "@chakra-ui/icon";
import CheckIcon from "@chakra-ui/icon";
import { Heading } from '@chakra-ui/react'

export default function Contact() {
    return (
        <div className="contact">
            <Heading>Entre em contato!</Heading>
            <form className="contact__form" action="">
                <Stack spacing={4} className="contact__input">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <PhoneIcon color='gray.300' />
                        </InputLeftElement>
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input placeholder='Enter amount' />
                        <InputRightElement>
                            <CheckIcon color='green.500' />
                        </InputRightElement>
                    </InputGroup>
                </Stack>

                {/* <picture >
                    <img
                        className="contact__img"
                        //@ts-ignore
                        src={<ContactSVG />} alt="" />
                </picture>
                <label
                    className="contact__label"
                    htmlFor="name"
                >
                    Nome:
                </label>
                <input
                    className="contact__input"
                    id="name"
                    type="text"
                />
                <label
                    className="contact__label"
                    htmlFor="email"
                >
                    E-mail:
                </label>
                <input
                    className="contact__input"
                    id="email"
                    type="email"
                />
                <label
                    className="contact__label"
                    htmlFor="telephone"
                >
                    Nome:
                </label>
                <input
                    className="contact__input"
                    id="telephone"
                    type="tel"
                />
                <label
                    className="contact__label"
                    htmlFor="message"
                >
                    Mensagem:
                </label>
                <textarea
                    className="contact__text"
                    name="message"
                    id="message"
                    cols={30}
                    rows={10} /> */}
                <button className="btn contact__button">Enviar!</button>
            </form>
        </div>
    )
}