"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const NavLi = ({ text }: { text: string }) => {
    const router = useRouter();
    const { setIsAuthenticated } = useAuth();
    const handleClick = async () => {
        if (text == "Log Out") {
            toast.success("Logged out");
            setIsAuthenticated(false);
            return router.push("/");

        }
        router.push(text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase().replace(" ", "")}`)
    }
    return (
        <li
            onClick={handleClick}
            className="cursor-pointer">
            {text}
        </li>
    )
}

export default NavLi