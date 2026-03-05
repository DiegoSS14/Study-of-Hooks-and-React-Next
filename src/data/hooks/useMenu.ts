import { useContext } from "react";
import { MenuContext } from "../context/MenuProvider";

export default function useMenu() {
    return useContext(MenuContext)
}