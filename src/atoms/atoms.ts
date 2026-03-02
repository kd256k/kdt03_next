import { atom } from "jotai";
import type {Session} from "@supabase/supabase-js";

export const isLoginAtom = atom(false);
export const userAtom = atom<Session | null>(null);
//import type { Atom } from "jotai";
//export const isLoginAtom : Atom<boolean> = atom(false);

