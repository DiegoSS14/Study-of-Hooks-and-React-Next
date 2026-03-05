import { useContext } from "react";
import { TemaContext } from "../context/TemaProvider";

export default function() {
    return useContext(TemaContext)
}