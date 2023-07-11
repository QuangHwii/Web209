import React, { useState } from 'react'
import { Button, Input } from '..'
import { AiOutlinePlus, AiFillCopy } from 'react-icons/ai'
import { ICar } from '../interface/car'

type FormProps = {
    onAdd: (car: ICar) => void
}

const Form = ({ onAdd }: FormProps) => {
    const [input, setInput] = useState({})

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input) return

        onAdd({
            ...input,
            id: Math.floor(Math.random() * 1000)
        } as ICar)

        setInput('')

        const form = e.target as HTMLFormElement
        form.reset()

    }

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // lấy dữ liệu của nhiều input và set vào state
        setInput({
            ...input,
            [e.target.name]:e.target.value // cú pháp computed property name của ES6
        })
        // console.log(input);
        

    }
    return (
        <form className='flex justify-beetween items-center p2'
            onSubmit={onHandleSubmit}>
                {/* {JSON.stringify(input)} */}
            <Input name="name" onChange={onHandleChange} placeholder="Car Name" prefix={< AiFillCopy />} size="small" />
            <Input name="price" onChange={onHandleChange} placeholder="Car Price" prefix={< AiFillCopy />} size="small" />

            <Button type={'primary'} icon={< AiOutlinePlus className='text-xl' />} shape='default' />

        </form>
    )
}

export default Form