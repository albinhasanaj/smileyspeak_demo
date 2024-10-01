"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const Button = ({ text, redirect }: { text: string, redirect?: boolean }) => {
    const router = useRouter();
    const { setIsAuthenticated } = useAuth();

    const handleClick = async () => {
        if (text == "Log Out") {
            setIsAuthenticated(false);
            toast.success("Logged out successfully");
        }
        if (redirect) {
            return router.push(text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase().replace(" ", "")}`)
        }
    }

    return (
        <button className="px-8 py-4 text-[16px] md:text-[20px] bg-white rounded-[5px] box-shadow hover:bg-[#F0F0F0] text-black"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button