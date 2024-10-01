"use client";
import Button from '@/components/Button'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/AuthContext';

type LogInProps = {
    username: string;
    password: string;
};

const LogIn = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    const [values, setValues] = useState<LogInProps>({
        username: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAuthenticated(true);
        toast.success('Logged in successfully');
        router.push('/');

    };

    return (
        <form onSubmit={handleSubmit} className="w-[300px] sm:w-[350px] h-auto md:w-[450px] py-8 md:py-16 lg:w-[600px] rounded-[50px] bg-[#C4C4C4] border-black border-[1px] flex flex-col items-center gap-12 justify-center">
            <div className="size-[64px] lg:size-[128px] relative">
                <Image
                    src="/images/smileylogo.png"
                    alt="SmileySpeak Logo"
                    layout="fill"
                    objectFit="cover"
                    sizes="100%"
                />
            </div>
            <div className="flex flex-col gap-4 md:gap-8 items-center">
                <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"
                        className="md:w-[300px] lg:w-[400px] h-[35px] md:h-[50px] rounded-[5px] box-shadow focus:outline-none p-4"
                        placeholder="DragonSlayer"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                        className="md:w-[300px] lg:w-[400px] h-[35px] md:h-[50px] rounded-[5px] box-shadow focus:outline-none p-4"
                        placeholder='********'
                        onChange={handleChange}
                    />
                </div>
                <Button text="Log In" redirect={true} />
            </div>
            <Link href="/signup"
                className="text-[16px] md:text-[24px] text-[#0400B1]">
                Don't have an account?
            </Link>
        </form>
    )
}

export default LogIn